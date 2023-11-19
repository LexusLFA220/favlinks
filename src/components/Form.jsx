function Form(){
   
    this.state = {
      
        name: '', URL: ''
      };

      handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
      }

      submitForm = event => {
        event.preventDefault()
        const{name, URL} = this.state

        this.props.handleSubmit({name, URL})
        this.setState({name: '', URL: '' })
      }

    return(
        <form>
            <label for="linkName">Link Name:</label>   
            <input type="text" id="linkName" name="linkName" value={this.state.linkName} onChange={this.handleChange} />
            <br />
            <br />
            <label for="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" value={this.state.URL} onChange={this.handleChange} />
            <br />
            <br />
            <button onClick ={this.submitForm}>Submit</button>
        </form>
    )
}

export default Form