import styled from 'styled-components';
import { darken } from 'polished';

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
  button {
    margin: 5px 0 0;
    height: 44px;
    width: 100%;
    background: #38cb89;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#38CB89')};
    }
  }
`;
