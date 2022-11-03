import { useState } from 'react';
import { VscPass } from 'react-icons/vsc';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Label, Input, Button } from './RegistrationForm.styled';
// ==============================

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userRegisterData = {
    name,
    email,
    password,
  };

  const onInputChange = ({ target: { name: inputName, value } }) => {
    switch (inputName) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register(userRegisterData))
    onFormReset();
  };

  const onFormReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <Label>
          Name
          <Input
            onChange={onInputChange}
            type="text"
            name="name"
            value={name}
            required
            placeholder="Enter user name"
          />
        </Label>
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
          Register <VscPass />
        </Button>
      </form>
    </>
  );
};
