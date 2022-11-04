import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { AppBarHeader } from './AppBar.styled';

// =========================================

export const AppBar = () => {
  const token = useSelector(selectAuthToken);
  return (
    <AppBarHeader>
      <Navigation />
      {token ? <UserMenu /> : <AuthNav />}
    </AppBarHeader>
  );
};
