import { HiOutlineLogout } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/auth/authOperations';
import { selectAuthError, selectAuthUser } from 'redux/auth/authSelectors';

import { toast } from 'react-toastify';
import { UserMenuWrapper, Hello, LogoutBtn } from './UserMenu.styled';
// ===========================================

export const UserMenu = () => {
  const { name } = useSelector(selectAuthUser);
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout()).then(response => {
      console.log(response);
      if (response.payload === 'Request failed with status code 400') {
        toast.error('Oops...Something went wrong. Try later!');
        return;
      }
      if (!response.payload) {
        toast.success('You are successfully logout!');
        navigate('/', { replace: true });
      }
    });
  };
  
  if(error) toast.error(`Oops...${error}!`);

  return (
    <UserMenuWrapper>
      <Hello>Hello, {name}!</Hello>
      <LogoutBtn onClick={onLogout} type="button">
        Logout
        <HiOutlineLogout />
      </LogoutBtn>
    </UserMenuWrapper>
  );
};
