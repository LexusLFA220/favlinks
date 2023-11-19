import Table from "./Table"
import Form from "./Form"

function LinkContainer(){
  
    this.state ={
    
        favLinks: []
    };
  

    const removeLink = (index) => {
        const tempArray = [...this.state.favLinks];

        tempArray.splice(index, 1);

        this.setState({ favLinks: tempArray });
      }

    const handleSubmit = (favLink) => {
        this.setState(prevState => ({
        
        favLinks: [...prevState.favLinks, favLink]
          }));
      }

    return(
        <div>

           <h1>My Favorite Links</h1>
           <p>Add a new link with a name and URL to 
            the table!</p>
            <Table 
            linkData = {this.state.favLinks}
            removeLink = {this.removeLink} />
            <h1>Add New</h1>

            <Form handleSubmit ={this.handleSubmit}/>
        </div>
     );

}

export default LinkContainer