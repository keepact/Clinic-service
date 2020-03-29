import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import PropTypes from 'prop-types';

import Header from '~/components/Header';
import DatePicker from '~/components/FormFields/DatePicker';
import Select from '~/components/FormFields/Select';
import Input from '~/components/FormFields/Input';

import { getSource } from '~/store/ducks/clinic';

import { Container, Content } from './styles';

function Form({ handleSubmit }) {
  const dispatch = useDispatch();
  const { source } = useSelector((state) => state.clinic);

  useEffect(() => {
    dispatch(getSource());
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Content>
          <form id="Form" onSubmit={handleSubmit}>
            <Field
              name="name"
              htmlFor="name"
              placeholder="Nome Completo"
              component={Input}
            />
            <Field
              name="email"
              type="email"
              htmlFor="email"
              placeholder="Email"
              component={Input}
            />
            <Field
              name="source"
              htmlFor="source"
              placeholder="Como conheceu?"
              options={source && source}
              component={Select}
            />
            <Field
              name="birthdate"
              htmlFor="birthdate"
              placeholder="Nascimento"
              component={DatePicker}
            />
            <Field
              name="cpf"
              htmlFor="cpf"
              placeholder="CPF"
              component={Input}
            />
            <Field
              name="date"
              htmlFor="date"
              placeholder="Data do agendamento"
              component={DatePicker}
            />
          </form>
        </Content>
      </Container>
    </>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'SCHEDULE_FORM',
})(Form);
