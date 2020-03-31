import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 400px;
  }
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
