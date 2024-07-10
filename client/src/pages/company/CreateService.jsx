import React, { useState } from 'react'
import axios from 'axios'

function CreateService() {

    const [serviceName, setServiceName] = useState("")
    const [serviceDesc, setServiceDesc] = useState("")
    const [serviceValue, setServiceValue] = useState()
    const [serviceImage, setServiceImage] = useState()

    async function submit(e) {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3025/service/registerService", {
                name: serviceName,
                desc: serviceDesc,
                value: serviceValue,
                image: serviceImage
            }, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            console.log("Uploaded!")
            console.log(serviceImage)
        } catch (err) {
            console.log(err)
        }
    }

    function handleFileUpload(e) {
        setServiceImage(e.target.files[0]);
    }

    return (
        <div>
            Create Service
            <form method='POST' encType='multipart/form-data'>
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
                    accept="image/* "
                    onChange={handleFileUpload}
                />

                <button onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default CreateService