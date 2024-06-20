const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

dotenv.config();

// set up server

const app = express();
const PORT = process.env.PORT || 3025;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))

app.use(express.json())
app.use(cookieParser())

// connect to mongodb

mongoose.connect(process.env.MDB_CONNECT).
    then(() => {
        console.log(`MongoDB connected: ${PORT}`);
    }).
    catch(
        (err) => console.log("MongoDB not connected" + err)
    );

// set up routes

app.use("/company", require("./routers/companyRouter"))
app.use("/auth", require("./routers/userRouter"))