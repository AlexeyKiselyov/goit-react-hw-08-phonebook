import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { PhonebookPage } from 'pages/PhonebookPage/PhonebookPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LogInPage } from 'pages/LogInPage/LogInPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  selectAuthIsRefreshingCurrentUser,
  selectAuthToken,
} from 'redux/auth/authSelectors';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import { fetchContacts } from 'redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const isRefreshingCurrentUser = useSelector(
    selectAuthIsRefreshingCurrentUser
  );

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    console.log('phonebook');
    if (token) dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <>
      {!isRefreshingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="phonebook" element={<PhonebookPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="logIn" element={<LogInPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
