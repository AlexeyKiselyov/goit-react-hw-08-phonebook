import { selectAuthToken, selectAuthUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

import { HomePageMain, HomePageTitle, HomePageInfo } from './HomePage.styled';
// ==============================

const HomePage = () => {
  const token = useSelector(selectAuthToken);
  const { name } = useSelector(selectAuthUser);
  return (
    <HomePageMain>
      {token ? (
        <>
          <HomePageTitle> Welcome, {name}ð </HomePageTitle>
          <HomePageInfo>Your phonebook wait for you!" </HomePageInfo>
        </>
      ) : (
        <>
          <HomePageTitle> Welcome to Phonebook Appð </HomePageTitle>
          <HomePageInfo>Please, "Sign up" or "Log in"ð </HomePageInfo>
        </>
      )}
    </HomePageMain>
  );
};

export default HomePage;
