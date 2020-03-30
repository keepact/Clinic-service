import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;
`;

export const Content = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      display: inline-block;
      color: #ee4d64;
      font-weight: bold;
      margin-top: 10px;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      > div:first-child {
        padding: 10px;
      }

      input {
        width: 400px;
        height: 40px;
        padding: 10px;
      }
    }

    .react-select-container {
      padding-bottom: 0;
    }

    .react-select__value-container {
      height: 39.5px;
    }

    .react-datepicker__input-container {
      width: 400px;
    }
  }
`;

export const TitleContainer = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  padding: 0 10px;

  button {
    margin: 20px 0 0;
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

export const SubmitButton = styled.div`
  margin: 0 auto;

  button {
    margin: 20px 0 0;
    height: 44px;
    width: 810px;
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

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 0 50px;

  > div {
    margin-left: 10px;

    > p {
      text-transform: capitalize;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
