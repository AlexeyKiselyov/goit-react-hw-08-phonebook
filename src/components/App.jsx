import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { PhonebookPage } from 'pages/PhonebookPage/PhonebookPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LogInPage } from 'pages/LogInPage/LogInPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phonebook" element={<PhonebookPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="logIn" element={<LogInPage />} />
        </Route>
      </Routes>
    </>
  );
};
