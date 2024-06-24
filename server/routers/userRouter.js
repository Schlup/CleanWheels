const userRouter = require("express").Router()
const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// Signup
userRouter.post("/signup", async (req, res) => {
    try {
        const { name, lastname, cpf, email, password, passwordVerify } = req.body;

        // Validation
        if (!name)
            return res.status(400).json({ errorMessage: "Please insert your name." })

        if (!lastname)
            return res.status(400).json({ errorMessage: "Please insert your last name." })

        if (!cpf)
            return res.status(400).json({ errorMessage: "Please insert your CPF." })

        const existingCpf = await User.findOne({ cpf });
        if (existingCpf)
            return res.status(400).json({ errorMessage: "CPF already in use" })

        if (!name || !lastname || !cpf || !email || !password || !passwordVerify)
            return res.status(400).json({ errorMessage: "Please enter all required fields." })

        const existingEmail = await User.findOne({ email });
        if (existingEmail)
            return res.status(400).json({ errorMessage: "Email already in use." });

        if (!email)
            return res.status(400).json({ errorMessage: "E-mail is required!" });

        if (!password)
            return res.status(400).json({ errorMessage: "Password is required!" });

        if (password !== passwordVerify)
            return res.status(400).json({ errorMessage: "Please enter the same password twice!" })

        // hash the password

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // save a new user account to the database

        const newUser = new User({
            name,
            lastname,
            cpf,
            email,
            password: passwordHash
        })

        try {
            await newUser.save()
            res.status(200).json({ msg: "User created successfully." })
        } catch (error) {
            res.status(500).json({ msg: "Serverside error." });
        }

    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "Error registering user." })
    }
})


// Login
userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // validation

        if (!email) {
            return res.status(422).json({ msg: "E-mail is required!" });
        }

        if (!password) {
            return res.status(422).json({ msg: "Password is required!" });
        }

        //Check if user exists

        const userCheck = await User.findOne({ email: email });
        if (!userCheck) {
            return res.status(404).json({ msg: "User not found." });
        }

        const passwordCheck = await bcrypt.compare(password, userCheck.password);
        if (!passwordCheck) {
            return res.status(422).json({ msg: "Incorrect password!" });
        }

        // sign the token

        const token = jwt.sign({
            user: userCheck._id
        }, process.env.JWT_SECRET)
        console.log("Token created.")

        // send the token in a HTTP-only cookie

        res.cookie("token", token, {
            httpOnly: true
        }).send()
        console.log("Token sent, user logged in.")

    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMessage: "Error logging in user." });
    }
});

// Logout

userRouter.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send()
    console.log("Cookie deleted.")
});

module.exports = userRouter;