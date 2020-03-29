import React from 'react';
import PropTypes from 'prop-types';

import { MySelector } from './styles';

function Selector({
  input,
  label,
  disabled,
  options,
  placeholder,
  meta: { touched, error, warning },
}) {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <MySelector
        {...input}
        options={options}
        onBlur={() => {}}
        getOptionValue={(option) => option.especialidade_id}
        getOptionLabel={(option) => option.nome || option.nome_origem}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder={placeholder}
        isSearchable={false}
        disabled={disabled}
      />

      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </>
  );
}

Selector.defaultProps = {
  disabled: false,
  label: '',
};

Selector.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  meta: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Selector;
