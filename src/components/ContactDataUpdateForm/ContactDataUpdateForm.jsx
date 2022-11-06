import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/contactsSelectors';

import { VscCheck } from 'react-icons/vsc';
import { Label, Input, Button } from './ContactDataUpdateForm.styled';
import { updateContact } from 'redux/contacts/contactsOperations';
// ==============================

export const ContactDataUpdateForm = ({ onCloseModal, updateContactId }) => {
  const contacts = useSelector(selectContacts);
  const dispatsh = useDispatch();
  const userToUpdateArr = contacts.filter(
    contact => contact.id === updateContactId
  );
  const { id, name: userName, number: userNumber } = userToUpdateArr[0];

  const [name, setName] = useState(userName);
  const [number, setNumber] = useState(userNumber);

  const stateData = {
    id,
    name,
    number,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return null;
    }
  };

  const onFormSubmitAddContact = e => {
    e.preventDefault();
    dispatsh(updateContact(stateData));
    onCloseModal();
    onFormReset();
  };

  const onFormReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h2>Update contact</h2>
      <form onSubmit={onFormSubmitAddContact}>
        <Label>
          Name
          <Input
            onChange={onInputChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]{4,8}*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={onInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="099-999-99-99"
          />
        </Label>
        <Button>
          Submit changes <VscCheck />
        </Button>
      </form>
    </>
  );
};

ContactDataUpdateForm.propTypes = {
  updateContactId: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
