import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './app.module.css';
import ContactForm from './contactForm/contactForm';
import ContactList from './contactList/contactList';
import Filter from './filter/filter';

const SAVED_CONTACT_KEY = 'contactsList';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem(SAVED_CONTACT_KEY);
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target;

    if (contacts.map(contact => contact.name).includes(name.value)) {
      return alert(`Name ${name.value} is already here`);
    }

    setContacts([
      ...contacts,
      { id: nanoid(), name: name.value, number: number.value },
    ]);
    event.currentTarget.reset();
  };

  const handleInputChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const deleteContact = event => {
    const { id } = event.currentTarget.parentElement;
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.phonebook}>
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm formSubmit={formSubmit} />
      <h2 className={css.phonebook__contactsTitle}>Contacts</h2>
      <Filter
        contacts={contacts}
        filter={filter}
        handleInputChange={handleInputChange}
      />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
