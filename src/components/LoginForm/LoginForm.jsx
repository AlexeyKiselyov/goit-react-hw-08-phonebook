import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';

import { VscPass } from 'react-icons/vsc';
import { Title, Label, Input, Button } from './LoginForm.styled';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';
// ==============================

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectAuthIsLoading);

  const userRegisterData = {
    email,
    password,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return null;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(login(userRegisterData)).then(response => {
      if (response.payload === 'Request failed with status code 400') {
        toast.error('Oops..Wrong email or password!');
        return;
      }
      if (response.payload.token) {
        toast.success('You are successfully log in!');
        navigate('/', { replace: true });
        onFormReset();
      }
    });
  };

  const onFormReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Title>Log in</Title>
      <form onSubmit={onFormSubmit}>
        <Label>
          Email
          <Input
            onChange={onInputChange}
            value={email}
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </Label>
        <Label>
          Password
          <Input
            onChange={onInputChange}
            value={password}
            type="password"
            name="password"
            required
            placeholder="Enter password"
          />
        </Label>

        <Button type="submit">
          Log in <VscPass />
        </Button>
      </form>
      {isLoading && <Loader />}
    </>
  );
};
