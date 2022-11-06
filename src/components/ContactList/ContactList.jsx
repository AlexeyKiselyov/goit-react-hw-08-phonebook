import { VscTrash, VscEdit } from 'react-icons/vsc';
import Avatar from 'react-avatar';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilterContacts,
} from 'redux/contacts/contactsSelectors';

import { Contact, Ul, BtnWrapper, Button } from './ContactList.styled';
import { useState } from 'react';
import { deleteContacts } from 'redux/contacts/contactsOperations';
import { Modal } from 'components/Modal/Modal';
// ===========================

export const ContactList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateContactId, setUpdateContactId] = useState(null);

  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilterContacts);

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const onModalOpen = id => {
    setIsModalOpen(true);
    setUpdateContactId(id);
  };

  const onCloseModal =()=>{
    setIsModalOpen(false);
  }

  return (
    <>
      {!contacts.length && <p>Your phonebook is empty</p>}
      {filterContacts.length > 0 ? (
        <Ul>
          {filterContacts.map(({ name, number, id }) => (
            <Contact key={id} data-id={id}>
              <Avatar
                round={true}
                size={40}
                name={name}
                alt={'avatar'}
                color={'#2196f3'}
              />
              <div>
                <p>
                  {name}: {number}
                </p>
              </div>
              <BtnWrapper>
                <Button
                  type="button"
                  name="updateBtn"
                  onClick={() => onModalOpen(id)}
                >
                  <VscEdit />
                </Button>
                <Button
                  type="button"
                  name="deleteBtn"
                  onClick={() => onDeleteContact(id)}
                >
                  <VscTrash />
                </Button>
              </BtnWrapper>
            </Contact>
          ))}
        </Ul>
      ) : (
        contacts.length > 0 && <p>Nothing was found...</p>
      )}
      {isModalOpen&&<Modal onCloseModal={onCloseModal} updateContactId={updateContactId}/>}
    </>
  );
};


