import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import { Layout } from './Layout/Layout';

import {
  selectAuthIsRefreshingCurrentUser,
  selectAuthToken,
} from 'redux/auth/authSelectors';
import { refreshCurrentUser } from 'redux/auth/authOperations';

import { fetchContacts } from 'redux/contacts/contactsOperations';
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const PhonebookPage = lazy(() => import('pages/PhonebookPage/PhonebookPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LogInPage = lazy(() => import('pages/LogInPage/LogInPage'));
//============================================================

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
    if (token) dispatch(fetchContacts());
  }, [dispatch, token]);

  return (
    <>
      {!isRefreshingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="phonebook"
              element={
                <PrivateRoute>
                  <PhonebookPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LogInPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
