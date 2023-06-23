import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleInputChange, filter }) => {
  return (
    <label className={css.phonebookFilter__label}>
      Find contacts by name
      <input
        className={css.phonebookFilter__input}
        onChange={handleInputChange}
        value={filter}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  handleInputChange: PropTypes.func,
  filter: PropTypes.string,
};
