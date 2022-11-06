import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  min-width: 328px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);

  & h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: 0.01em;
    color: #1f3349;
    margin-bottom: 15px;
  }
`;
