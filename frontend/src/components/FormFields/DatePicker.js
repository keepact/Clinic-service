import React from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({
  input,
  label,
  disabled,
  placeholderText,
  showTimeSelect,
  meta: { touched, error, warning },
}) {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}

      <ReactDatePicker
        {...input}
        dateFormat="dd/MM/yyyy"
        onBlur={() => input.onBlur(input.value)}
        placeholderText={placeholderText}
        disabled={disabled}
        selected={input.value ? input.value : null}
        showTimeSelect={showTimeSelect}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </>
  );
}

DatePicker.defaultProps = {
  label: '',
  disabled: false,
  showTimeSelect: false,
};

DatePicker.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  placeholderText: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  showTimeSelect: PropTypes.bool,
  meta: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DatePicker;
