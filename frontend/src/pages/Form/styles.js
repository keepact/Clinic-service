import styled from 'styled-components';

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
      color: ${(props) => props.theme.colors.error};
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
