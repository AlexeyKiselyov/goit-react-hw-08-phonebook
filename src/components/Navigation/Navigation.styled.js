import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LinkNav = styled(NavLink)`
  font-size: 22px;
  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:active),
  &:focus-visible:not(:active) {
    border-bottom: 1px solid #2a2a2a;
  }

  &.active {
    color: #2196f3;
  }
`;
