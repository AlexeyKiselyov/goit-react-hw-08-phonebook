import { Box } from "components/Box"
import { AuthStyled, LinkStyled } from "./AuthNav.styled"


export const AuthNav=()=>{
  return <>
    <Box as={'nav'} display='flex'>
    <AuthStyled>
      <li>
        <LinkStyled to ="register">Sign up</LinkStyled>
      </li>
      <li>
        <LinkStyled to ="logIn">Log in</LinkStyled>
      </li>
    </AuthStyled>
  </Box>
  </>
}