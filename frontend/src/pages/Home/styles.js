import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: #03b4d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    span {
      color: #fff;
      font-weight: bold;
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;
