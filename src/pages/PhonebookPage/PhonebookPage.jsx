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
import { addContacts, deleteContacts } from 'redux/contacts/contactsOperations';

import { toast } from 'react-toastify';
import { Loader } from '../../components/Loader/Loader';
import { PhonebookMain } from './PhonebookPage.styled';

// ==============================

const PhonebookPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

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
    <PhonebookMain>
      <Section title="Phonebook">
        <Phonebook onAddContact={onAddContact} />
      </Section>

      <Section title="Contacts">
        <Filter onChangeFilter={onChangeFilter} />
        <ContactList onDeleteContact={onDeleteContact} />
      </Section>
      {isLoading && <Loader />}
    </PhonebookMain>
  );
};

export default PhonebookPage;
