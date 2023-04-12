import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    const contactData = {
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    this.props.onFormSubmit(contactData);
    e.target.reset();
  };

  render() {
    const { handleSubmit, nameInputId, numberInputId } = this;
    return (
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label htmlFor={nameInputId}>Name</label>

        <input
          id={nameInputId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={numberInputId}>Number</label>
        <input
          id={numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
