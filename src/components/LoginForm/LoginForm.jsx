import { useState } from 'react';
import { VscPass } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Label, Input, Button } from './LoginForm.styled';
// ==============================

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
    dispatch(login(userRegisterData));
    onFormReset();
  };

  const onFormReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
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
    </>
  );
};
