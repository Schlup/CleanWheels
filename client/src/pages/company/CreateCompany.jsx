import React, { useState } from 'react'
import axios from 'axios'

function CreateCompany() {

  const [companyName, setCompanyName] = useState("")
  const [companyType, setCompanyType] = useState([""])
  const [companyEmail, setCompanyEmail] = useState("")
  const [companyPhone, setCompanyPhone] = useState("")
  const [companyCnpj, setCompanyCpnj] = useState("")
  const [companyAdress, setCompanyAdress] = useState("")
  const [companyEmployees, setCompanyEmployees] = useState([""])
  const [companyImage, setCompanyImage] = useState(null)

  async function submit(e) {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3025/company/signup", {
        name: companyName,
        serviceType: companyType,
        email: companyEmail,
        phone: companyPhone,
        cnpj: companyCnpj,
        adress: companyAdress,
        employees: companyEmployees,
        image: companyImage
      }, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      console.log("Uploaded!")
      console.log(companyImage)
    } catch (err) {
      console.log(err)
    }
  }

  function handleFileUpload(e) {
    setCompanyImage(e.target.files[0]);
  }

  return (
    <div>
      Create Service
      <form method='POST' encType='multipart/form-data'>
        <label htmlFor="">Nome</label>
        <input
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label htmlFor="">Tipo</label>
        <input
          onChange={(e) => setCompanyType(e.target.value)}
        />

        <label htmlFor="">Email</label>
        <input
          onChange={(e) => setCompanyEmail(e.target.value)}
        />

        <label htmlFor="">Phone</label>
        <input
          onChange={(e) => setCompanyPhone(e.target.value)}
        />

        <label htmlFor="">Cnpj</label>
        <input
          onChange={(e) => setCompanyCpnj(e.target.value)}
        />

        <label htmlFor="">Adress</label>
        <input
          onChange={(e) => setCompanyAdress(e.target.value)}
        />

        <label htmlFor="">EMployees</label>
        <input
          onChange={(e) => setCompanyEmployees(e.target.value)}
        />

        <label htmlFor="">Imagem</label>
        <input
          type="file"
          name="companyImage"
          id="companyUpload"
          accept="image/* "
          onChange={handleFileUpload}
        />

        <button onClick={submit}>Submit</button>
      </form>
    </div>
  )
}

export default CreateCompany