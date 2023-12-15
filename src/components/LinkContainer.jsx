import Table from "./Table"
import Form from "./Form"
import { useState } from "react";
function LinkContainer(){
  const getLinks = async () => {
    try {
      // make a request to our server to get the links
      const response = await fetch('/api/links')
      // convert the response to json
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  const postLink = async (newLink) => {
    try{
      let response = await fetch('/new', {
        method: 'Post', 
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLink),
      })
      console.log(response)
      let message = response.text()
      console.log(message)
    } 
    catch (error){
      console.error(error)
    }

  }
  const [favLinks, setFavLinks] = useState([])

    const handleRemove = (index) => {
        let _links = [...favLinks]
        _links.splice(index,1)
        setFavLinks(_links) 
        console.log(index)
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
            removeLink={handleRemove} />
            <h1>Add New</h1>

            <Form handleSubmitLink ={handleSubmit}/>
        </div>
     )

}

export default LinkContainer