import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GeneralInfo from './General'
import UseDetails from './useDetails'
import Education from './Education'
import WorkExp from './PracticalExperience'

function App() {
const[submit, issubmit] = useState(false)

  const detailsState = UseDetails()


  

  
  return (
    <>
     <GeneralInfo submit={submit} issubmit={issubmit} {...detailsState}/>
     <Education submit={submit} issubmit={issubmit} {...detailsState}/>
     <WorkExp submit={submit} issubmit={issubmit} {...detailsState}/>
     <button type="submit" onClick={() => issubmit(true)}> Submit Details </button>

     <button type="submit" onClick={() => issubmit(false)}> Edit Details </button>
    </>
  )
}

export default App
