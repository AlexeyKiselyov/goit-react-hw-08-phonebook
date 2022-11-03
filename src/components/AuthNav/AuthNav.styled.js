import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  padding: 4px 8px;

  font-size: 16px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:active),
  &:focus-visible:not(:active) {
    color: #2196f3;
  }
`;
