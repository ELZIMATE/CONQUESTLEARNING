


const Shabeb  = (props) => { /*constructing a function under the file containing the props parameter which is used to pass in the props from the app main parent file*/
   
   
   
    return(
        <div className="Elias">
            <p>
                Name:{props.name} 
            <p>
                Role:{props.role}
            </p>
                Status:{props.isactive ? " Active" : " Not active"} 
            </p>
        </div>



    )
    


}

export default Shabeb