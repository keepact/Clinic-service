import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({
  form,
  disabled,
  typeButton,
  buttonMargin,
  children,
  onClick,
  margin,
  padding,
  width,
}) {
  return (
    <Container
      margin={margin}
      padding={padding}
      width={width}
      buttonMargin={buttonMargin}>
      <button
        form={form}
        type={typeButton}
        disabled={disabled}
        onClick={onClick}>
        {children}
      </button>
    </Container>
  );
}

Button.defaultProps = {
  form: '',
  typeButton: 'button',
  buttonMargin: '20px 0 0',
  disabled: false,
  width: '',
  padding: '',
  margin: '',
  onClick: () => {},
};

Button.propTypes = {
  form: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  typeButton: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  buttonMargin: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
