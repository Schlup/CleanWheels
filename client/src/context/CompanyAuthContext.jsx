import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const CompanyContext = createContext()

function CompanyAuthContext(props) {
    const [ownCompany, setOwnCompany] = useState(undefined)

    async function getOwnCompany() {
        const ownCompanyRes = await axios.get("http://localhost:3025/company/companyOwner")
        setOwnCompany(ownCompanyRes.data)
    }

    useEffect(() => {
        getOwnCompany();
    }, [])

    return (
        <CompanyContext.Provider value={{ ownCompany, getOwnCompany }}>
            {props.children}
        </CompanyContext.Provider>
    )
}

export default CompanyContext
export { CompanyAuthContext }