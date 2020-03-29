import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({
  input,
  label,
  disabled,
  placeholderText,
  meta: { touched, error, warning },
}) {
  useEffect(() => {
    const datePickers = document.getElementsByClassName(
      'react-datepicker__input-container',
    );
    Array.from(datePickers).forEach((el) =>
      el.childNodes[0].setAttribute('readOnly', true),
    );
  }, []);

  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}

      <ReactDatePicker
        {...input}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholderText}
        disabled={disabled}
        selected={input.value ? input.value : null}
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
};

DatePicker.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  placeholderText: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  meta: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DatePicker;
