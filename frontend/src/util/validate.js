export const validateSpecialities = (values) => {
  const errors = {};

  if (!values.speciality) {
    errors.speciality = 'Escolha uma especialidade';
  }

  return errors;
};
