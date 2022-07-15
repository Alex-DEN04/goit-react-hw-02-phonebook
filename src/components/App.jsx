import React from 'react';

import Form from './Phonebook/Phonebook'

class App extends React.Component {
  state = {
    contacts: []
  };

  formSubmitHandler = data => {
    this.setState(prevState => prevState.contacts.push(data))
    // console.log(data);
    console.log(this.state);

  }
  // handleInputChange = e => {
  //   console.log(e.currentTarget);
  //   console.log(e.currentTarget.value);
  //   console.log(e.currentTarget.name);
  //   this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  // };

  
  render() {
    return (
      <Form onSubmit={this.formSubmitHandler}>
      </Form>
    )
      
  }
}

export default App;