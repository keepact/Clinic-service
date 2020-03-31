import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};
  border: solid 1px ${(props) => props.theme.colors.secundary};
  height: 150px;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 1440px;
  margin-top: 35px;
`;
