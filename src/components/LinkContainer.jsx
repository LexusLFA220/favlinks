import Table from "./Table"
import Form from "./Form"
import { useState } from "react";
function LinkContainer(){
  
  const [favLinks, setFavLinks] = useState([])

    const handleRemove = (index) => {
        
      }

    const handleSubmit = (favLink) => {
      setFavLinks([...favLinks,favLink])
      }

    return(
        <div>

           <h1>My Favorite Links</h1>
           <p>Add a new link with a name and URL to 
            the table!</p>
            <Table 
            linkData={favLinks}
            prop2 prop3 />
            <h1>Add New</h1>

            <Form handleSubmitLink ={handleSubmit}/>
        </div>
     )

}

export default LinkContainer