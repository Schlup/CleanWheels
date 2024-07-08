import React, { useState } from 'react'
import axios from 'axios'

function CreateService() {

    const [serviceName, setServiceName] = useState("")
    const [serviceDesc, setServiceDesc] = useState("")
    const [serviceValue, setServiceValue] = useState()
    const [serviceImage, setServiceImage] = useState({ myFile: "" })

    async function submit(e) {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3025/service/registerService", {
                name: serviceName,
                desc: serviceDesc,
                value: serviceValue,
                image: serviceImage
            })
            console.log("Uploaded!")
        } catch (err) {
            console.log(err)
        }
    }

    async function handleFileUpload(e) {
        const file = e.target.files[0]
        const base64 = await convertToBase64(file)
        setServiceImage(base64)
    }

    return (
        <div>
            Create Service
            <form method='POST'>
                <label htmlFor="">Nome</label>
                <input
                    onChange={(e) => setServiceName(e.target.value)}
                />

                <label htmlFor="">Descriçao</label>
                <input
                    onChange={(e) => setServiceDesc(e.target.value)}
                />

                <label htmlFor="">Preço</label>
                <input
                    onChange={(e) => setServiceValue(e.target.value)}
                />

                <label htmlFor="">Imagem</label>
                <input
                    type="file"
                    name="serviceImage"
                    id="serviceUpload"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                />

                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateService

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}