import { Box } from 'components/Box';
import { NavStyled,LinkNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Box as={'nav'} display='flex'>
        <NavStyled>
          <li>
            <LinkNav to="/" end>
              Home
            </LinkNav>
          </li>
          <li>
            <LinkNav to="phonebook">Phonebook</LinkNav>
          </li>
        </NavStyled>
      </Box>
    </>
  );
};
