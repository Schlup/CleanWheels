import React, { useEffect, useState } from 'react'
import LogOutBtn from './LogOutBtn'
import CreateCompanyBtn from './CreateCompanyBtn'
import AccessCompanyBtn from './AccessCompanyBtn'
import axios from 'axios'

function Home() {

  const [allServices, setAllServices] = useState(null)

  const getImage = async () => {
    const result = await axios.get("http://localhost:3025/service/getServices")
    console.log(result)
    setAllServices(result.data.data)
  }

  useEffect(() => {
    getImage()
  }, [])

  return (
    <div>
      Home
      <LogOutBtn />
      <CreateCompanyBtn />
      <AccessCompanyBtn />
      <div>
        {allServices === null ? "" : allServices.map(data => {
          return (
            <img src={require(`../images/${data.image}`)} alt='' key={require(`../images/${data.image}`)} />
          )
        })}
      </div>
    </div>
  )
}

export default Home