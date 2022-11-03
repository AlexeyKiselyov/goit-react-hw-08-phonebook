// import { useSelector } from 'react-redux';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';

// import { selectAuthToken } from 'redux/auth/authSelectors';
import { Box } from 'components/Box';
// =========================================

export const AppBar = () => {
  // const token = useSelector(selectAuthToken);
  return (
    <Box
      as={"header"}
      bg="background"
      mt={6}
      mb={0}
      mx="auto"
      py={5}
      px={6}
      maxWidth="500px"
      borderRadius="normal"
      border="normal"
      display='flex'
      justifyContent='space-between'
      alignSelf='center'

    >
      <Navigation />
      <AuthNav />
      {/* <UserMenu /> */}
    </Box>
  );
};
