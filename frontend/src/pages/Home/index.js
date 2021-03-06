import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

import { Field, reduxForm } from 'redux-form';

import Select from '~/components/FormFields/Select';
import ThemeSwitcher from '~/components/Switch';
import Button from '~/components/Button';
import logo from '~/assets/images/logo.png';

import { validateSpecialities } from '~/util/validate';
import { getSpecialties, getProfessionals } from '~/store/ducks/clinic';

import { Container, Content } from './styles';

function Home({ handleSubmit, submitting, pristine }) {
  const dispatch = useDispatch();
  const { specialties: data } = useSelector((state) => state.clinic);

  const specialties = useMemo(() => data, [data]);

  useEffect(() => {
    dispatch(getSpecialties());
  }, [dispatch]);

  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="Clinic" />
          <ThemeSwitcher />
        </div>

        <Content>
          <form
            id="Form"
            onSubmit={handleSubmit((values) =>
              dispatch(getProfessionals(values.speciality)),
            )}>
            <Field
              name="speciality"
              htmlFor="speciality"
              placeholder="Selecione uma especialidade"
              options={specialties && specialties}
              component={Select}
            />
          </form>
          <Button
            form="Form"
            buttonMargin="0"
            disabled={pristine || submitting}
            typeButton="submit">
            <GoSearch size={20} />
          </Button>
        </Content>
      </Container>
    </>
  );
}

Home.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'SPECIALITY_FORM',
  validate: validateSpecialities,
})(Home);
