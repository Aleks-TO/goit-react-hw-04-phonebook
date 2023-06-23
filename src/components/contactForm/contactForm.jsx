import css from './contactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({ formSubmit }) => {
  return (
    <form className={css.phonebookForm} onSubmit={formSubmit}>
      <label className={css.phonebookForm__label}>
        Name
        <input
          className={css.phonebookForm__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.phonebookForm__label}>
        Number
        <input
          className={css.phonebookForm__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.phonebookForm__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.prototype = {
  formSubmit: PropTypes.func,
};
