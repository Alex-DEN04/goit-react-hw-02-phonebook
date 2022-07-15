import React from "react";
import { nanoid } from 'nanoid'

class Form extends React.Component {
    state = {
        name: '',
        number: '',
    }
    nameInputId = nanoid();
    numberInputId = nanoid();

    handleInputChange = e => {
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.value);
        // console.log(e.currentTarget.name);
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    
    this.reset();
  };
    reset = () => {
      this.setState({
        name: '',
        number: '',
    })
  }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}> {' '} Name</label>
          
          <input id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
            id={this.numberInputId}
          value={this.state.number}
          onChange={this.handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
        )
    }
}

export default Form;