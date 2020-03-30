import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: ${(props) => props.buttonMargin};
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
