import css from './contactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  return (
    <ul className={css.contacts__list}>
      {contacts.map(data => {
        if (filter === '') {
          return (
            <li key={data.id} id={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                className={css.contacts__btn}
                type="button"
                onClick={onDeleteContact}
              >
                delete
              </button>
            </li>
          );
        }
        if (data.name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <li key={data.id} id={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                className={css.contacts__btn}
                type="button"
                onClick={onDeleteContact}
              >
                delete
              </button>
            </li>
          );
        }
        return '';
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,

  onDeleteContact: PropTypes.func,
};
