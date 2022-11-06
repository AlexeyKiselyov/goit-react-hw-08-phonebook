import styled from 'styled-components';
// =============================
export const Ul = styled.ul`
  margin: 0;
  padding: 0;

  list-style: disc;
`;

export const Contact = styled.li`
  margin-bottom: 10px;
  margin-left: 5px;
  padding-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  border-bottom: 1px solid black;

  p {
    margin-right: 15px;
    max-width: 350px;

    overflow-x: hidden;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-left: auto;
  margin-right: 5px;
`;

export const Button = styled.button`
  /* margin-left: auto;
  margin-right: 5px; */
  padding: 4px 5px;
  min-width: 25px;
  height: 25px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  color: #ffffff;

  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-color: transparent;
  transition: scale, fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.04;
  }

  &:active {
    border-color: #2a2a2a;
  }

  &:hover svg {
    fill: #2a2a2a;
  }
`;
