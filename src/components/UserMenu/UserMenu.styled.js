import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Hello = styled.p`
  display: flex;
  align-items:center;
  padding: 4px 15px;

  border-right:1px solid;

  font-size: 16px;
  line-height: 1.25;
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 8px;

  font-family:inherit;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 6px;
  border-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover:not(:active),
  &:focus-visible:not(:active) {
    color: #2196f3;
    background: rgba(177, 186, 196, 0.12);
  }
`;
