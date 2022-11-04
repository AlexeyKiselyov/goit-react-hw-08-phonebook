import styled from 'styled-components';

export const HomePageMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 650px;
  max-height: 100vh;

  background: #ecf1f3;
  margin-top: 32px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 32px;

  border: 2px solid grey;
  border-radius: 6px;
`;

export const HomePageTitle = styled.h1`
  margin-bottom: 20px;

  font-size: 36px;
  color: #2a2a2a;
`;
export const HomePageInfo = styled.h2`
  margin-bottom: 20px;

  font-size: 24px;
  color: #2a2a2a;
`;
