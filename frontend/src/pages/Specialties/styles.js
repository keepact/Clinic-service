import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DoctorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  margin: 50px auto;
  max-width: 1280px;
  padding: 0 20px;
`;

export const Doctor = styled.div`
  width: 220px;
  height: 100%;
  box-shadow: 10px 10px 50px 1px ${(props) => props.theme.colors.shadow};
  border-radius: 10px;
  flex-basis: calc(25% - 12px);
  flex-shrink: 1;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;

  img {
    width: 46px;
    height: 46px;
    border-radius: 20px;
  }

  div {
    margin-left: 10px;

    h4 {
      margin-bottom: 10px;
      text-transform: capitalize;
    }
  }
`;
