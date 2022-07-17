import React from 'react';
import { nanoid } from 'nanoid';
import {Formik} from 'formik'

class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  // InputId = nanoid();

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    this.props.onSubmit({ id, ...this.state });
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Formik>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.InputId}>Name</label>

        <input
          // id={this.InputId}
          value={this.state.name}
          onChange={this.handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          // id={this.InputId}
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
      </Formik>
    );
  }
}

export default Form;
