import PropTypes from 'prop-types';
import { VscTrash, VscAccount } from 'react-icons/vsc';

import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterContacts,
} from 'redux/contacts/contactsSelectors';

import { Contact, Ul, Button } from './ContactList.styled';
// ===========================

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <>
      {!contacts.length && <p>Your phonebook is empty</p>}
      {filterContacts.length > 0 ? (
        <Ul>
          {filterContacts.map(({ name, number, id }) => (
            <Contact key={id} data-id={id}>
              <VscAccount size="15" />
              <p>
                {name}: {number}
              </p>
              <Button
                type="button"
                name="deleteBtn"
                onClick={e => onDeleteContact(e)}
              >
                Delete
                <VscTrash />
              </Button>
            </Contact>
          ))}
        </Ul>
      ) : contacts.length>0&&(
        <p>Nothing was found...</p>
      )}
    </>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
