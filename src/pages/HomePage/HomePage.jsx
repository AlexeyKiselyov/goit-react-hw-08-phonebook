import { Section } from '../../components/Section/Section';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box } from '../../components/Box';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { LoginForm } from '../../components/LoginForm/LoginForm';
// ==============================

export const HomePage = () => {
  return (
    <Box
      bg="background"
      my={6}
      mx="auto"
      py={5}
      px={6}
      maxWidth="500px"
      borderRadius="normal"
      border="normal"
    >
      <Section title="Registration form">
        <RegistrationForm />
      </Section>
      <Section title="Log in">
        <LoginForm />
      </Section>
      <ToastContainer autoClose={2000} />
    </Box>
  );
};
