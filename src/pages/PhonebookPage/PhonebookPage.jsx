import { Phonebook } from '../../components/Phonebook/Phonebook';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Section } from '../../components/Section/Section';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { updateFilter } from 'redux/filter/filterSlice';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from 'redux/contacts/contactsOperations';

import { toast } from 'react-toastify';
import { Box } from '../../components/Box';
import { useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';

// ==============================

export const PhonebookPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('phonebook');
    setTimeout(() => {
      dispatch(fetchContacts());
    }, 50);
  }, []);

  const onAddContact = newUser => {
    const uniqUserSearch = contacts.find(({ name }) => name === newUser.name);
    uniqUserSearch
      ? toast.info(`"${uniqUserSearch.name}" is already in contacts`)
      : dispatch(addContacts(newUser));
  };

  const onDeleteContact = e => {
    const deleteById = e.target.closest('li[data-id]').dataset.id;
    dispatch(deleteContacts(deleteById));
  };

  const onChangeFilter = e => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <Box
      as={'main'}
      bg="background"
      my={6}
      mx="auto"
      py={5}
      px={6}
      maxWidth="650px"
      borderRadius="normal"
      border="normal"
    >
      <Section title="Phonebook">
        <Phonebook onAddContact={onAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter onChangeFilter={onChangeFilter} />
        <ContactList onDeleteContact={onDeleteContact} />
      </Section>
      {isLoading && <Loader />}
    </Box>
  );
};
