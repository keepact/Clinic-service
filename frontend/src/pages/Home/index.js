import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { GoSearch } from 'react-icons/go';
import Select from '~/components/FormFields/Select';

import logo from '~/assets/logo.png';

import { validateSpecialities } from '~/util/validate';
import { getSpecialties, getProfessionals } from '~/store/ducks/clinic';

import { Container, Content } from './styles';

function Home({ handleSubmit, submitting }) {
  const dispatch = useDispatch();

  const { specialties: data } = useSelector((state) => state.clinic);

  const specialties = useMemo(() => data, [data]);

  useEffect(() => {
    dispatch(getSpecialties());
  }, [dispatch]);

  return (
    <Container>
      <img src={logo} alt="Clinic" />

      <Content>
        <form
          id="Form"
          onSubmit={handleSubmit((id) => dispatch(getProfessionals(id)))}>
          <Field
            name="speciality"
            htmlFor="speciality"
            placeholder="Selecione uma especialidade"
            options={specialties && specialties}
            component={Select}
          />
        </form>
        <button form="Form" disabled={submitting} type="submit">
          <GoSearch size={20} />
        </button>
      </Content>
    </Container>
  );
}

Home.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'SPECIALITY_FORM',
  validate: validateSpecialities,
})(Home);
