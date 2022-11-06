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
          <HomePageTitle> Welcome, {name}🎉 </HomePageTitle>
          <HomePageInfo>Your phonebook wait for you!" </HomePageInfo>
        </>
      ) : (
        <>
          <HomePageTitle> Welcome to Phonebook App🎉 </HomePageTitle>
          <HomePageInfo>Please, "Sign up" or "Log in"👌 </HomePageInfo>
        </>
      )}
    </HomePageMain>
  );
};

export default HomePage;
