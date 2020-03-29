import styled from 'styled-components';

import Select from 'react-select';

export const MySelector = styled(Select)`
  width: 400px;
  padding-bottom: 15px;
  .react-select__control {
    margin-top: 4px;
  }
  .react-select__value-container {
    height: 45px;
  }
`;
