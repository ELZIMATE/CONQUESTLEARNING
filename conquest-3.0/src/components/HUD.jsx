import '../App.css'
import Journal from './Jounal'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import ToDoList from './ToDoList'
import Widgets from './Widgets'
import "./AppPalate.css"

import NavBar from './Navbar'

const HUD = ({...feats}) => {


  return (
    
    <>

<div className='UIBG'>  
    <div style={{display: `flex`, flexDirection: 'row', height:`100vh`}}>

      <NavBar {...feats}/>


      <div style={{display:`flex`, flexDirection: `column`, alignItems:`flex-start`}}>

           <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '50px', padding:'80px'}}>
          <img src="\src\assets\headshotprofile.JPG"  alt="Description of the image" style={{width:`100px`, height: `100px`}}/>
          <h2>Elias</h2>
          </div>

          <ProgressBar {...feats}/> 


          <div style={{display:`flex`, flexDirection:`row`, alignItems:`flex-start`}}>
          
          <Widgets {...feats} />
          </div>
          

        



      </div>

      



    

       
          

          



    

    

    
    </div>

    </div>  
    


    </>
  
  )
}

export default HUD
