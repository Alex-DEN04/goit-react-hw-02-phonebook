import React from 'react';

import Form from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  removeContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }));

  };

  formSubmitHandler = data => {
    for (const contact of this.state.contacts) {
      if (contact.name.toLowerCase() === data.name.toLowerCase()) {
        return alert(`${data.name} is already in contacts`);
      }
    }
    this.setState(prevState => ({
        contacts: [data, ...prevState.contacts]
      }))
    
  
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    
  };

  
  render() {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler}></Form>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter}></Filter>
          <ContactList items={filteredContacts} onDeleteContact={this.removeContact}></ContactList>
        </div>
      </>
    );
  }
}

export default App;
