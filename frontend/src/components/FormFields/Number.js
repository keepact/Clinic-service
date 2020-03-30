import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

function NumberInput({
  input,
  label,
  htmlFor,
  className,
  disabled,
  prefix,
  placeholder,
  formatSelected,
  meta: { touched, error, warning },
}) {
  return (
    <>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <NumberFormat
        {...input}
        className={className}
        format={formatSelected}
        mask="_"
        placeholder={placeholder}
        prefix={prefix}
        disabled={disabled}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </>
  );
}

NumberInput.defaultProps = {
  disabled: false,
  className: '',
  label: '',
  htmlFor: '',
  prefix: '',
};

NumberInput.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  formatSelected: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  meta: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default NumberInput;
