import styled from 'styled-components';

import Select from 'react-select';

export const MySelector = styled(Select)`
  width: 400px;
  padding-bottom: 15px;

  .react-select__control {
    background-color: ${(props) => props.theme.colors.background};
    margin-top: 4px;
  }

  .react-select__menu {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};

    div {
      > div {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
      }
      > div:hover {
        background: ${(props) => props.theme.colors.primary};
        color: #fff;
      }
    }
  }

  .react-select__single-value {
    color: ${(props) => props.theme.colors.text};
  }

  .react-select__placeholder {
    color: ${(props) => props.theme.colors.text};
  }
  .react-select__value-container {
    height: 45px;
  }
`;
