export const validateSpecialities = (values) => {
  const errors = {};

  if (!values.specialities) {
    errors.plan = 'Escolha uma especialidade';
  }

  return errors;
};
