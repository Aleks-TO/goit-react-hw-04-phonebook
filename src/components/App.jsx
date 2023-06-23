import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import ContactForm from './contactForm/contactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';

const SAVED_CONTACT_KEY = 'contactsList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = event => {
    event.preventDefault();
    const { contacts } = this.state;
    const { name, number } = event.target;
    // console.log(event.target);
    if (contacts.map(contact => contact.name).includes(name.value)) {
      return alert(`Name ${name.value} is already here`);
    }

    this.setState({
      contacts: [
        ...contacts,
        {
          id: nanoid(),
          name: name.value,
          number: number.value,
        },
      ],
    });
    event.currentTarget.reset();
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem(SAVED_CONTACT_KEY);
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem(
        SAVED_CONTACT_KEY,
        JSON.stringify(this.state.contacts)
      );
    }
  }

  deleteContact = event => {
    const { contacts } = this.state;
    const { id } = event.currentTarget.parentElement;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={css.phonebook__title}>Phonebook</h1>
        <ContactForm state={this.state} formSubmit={this.formSubmit} />
        <h2 className={css.phonebook__contactsTitle}>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
