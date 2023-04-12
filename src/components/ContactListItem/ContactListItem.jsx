import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={css.ContactListItem}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
