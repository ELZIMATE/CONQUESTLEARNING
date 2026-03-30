import { useState } from "react"


const UseDetails = () => {
  const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const[school, setSchool] =useState('')
    const[study, setStudy] = useState('')
    const[studydate, setStudyDate] = useState('')
    const[work, setWork] = useState('')
    const[role, setRole] = useState('')
    const[responsibilities, setResponsibilities] = useState('')
    const[workdate, setWorkDate] = useState('')
    const[enddate, setEndDate] = useState('')






return {name, email, phone, school, study, studydate, work, role, responsibilities, workdate, enddate, setResponsibilities, setEndDate, setWorkDate, setRole, setWork, setEmail, setPhone, setName, setSchool, setStudy, setStudyDate}


}

export default UseDetails