import { useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';

import { Box } from 'components/Box';
import { NavStyled, LinkNav } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectAuthToken);
  return (
    <>
      <Box as={'nav'} display="flex">
        <NavStyled>
          <li>
            <LinkNav to="/" end>
              Home
            </LinkNav>
          </li>
          {token && (
            <li>
              <LinkNav to="phonebook">Phonebook</LinkNav>
            </li>
          )}
        </NavStyled>
      </Box>
    </>
  );
};
