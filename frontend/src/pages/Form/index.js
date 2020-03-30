import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import PropTypes from 'prop-types';

import Header from '~/components/Header';
import DatePicker from '~/components/FormFields/DatePicker';
import Select from '~/components/FormFields/Select';
import Input from '~/components/FormFields/Input';
import NumberInput from '~/components/FormFields/Number';

import { validate } from '~/util/validate';
import { getSource } from '~/store/ducks/clinic';

import {
  Container,
  Content,
  TitleContainer,
  ButtonContainer,
  SubmitButton,
} from './styles';

function Form({ handleSubmit }) {
  const dispatch = useDispatch();
  const { source } = useSelector((state) => state.clinic);

  useEffect(() => {
    dispatch(getSource());
  }, [dispatch]);

  return (
    <>
      <Header />
      <ButtonContainer>
        <button type="button" onClick>
          Voltar
        </button>
      </ButtonContainer>
      <TitleContainer>
        <h1>Preencha abaixo os dados para o agendamento</h1>
      </TitleContainer>

      <Container>
        <Content>
          <form id="Form" onSubmit={handleSubmit}>
            <div>
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
            </div>
            <div>
              <Field
                name="birthdate"
                htmlFor="birthdate"
                placeholderText="Nascimento"
                component={DatePicker}
              />
              <div>
                <Field
                  name="cpf"
                  htmlFor="cpf"
                  formatSelected="###.###.###-##"
                  placeholder="CPF"
                  component={NumberInput}
                />
              </div>
            </div>
            <div>
              <Field
                name="data_time"
                htmlFor="data_time"
                placeholderText="Data do Agendamento "
                component={DatePicker}
              />
              <Field
                name="source"
                htmlFor="source"
                placeholder="Como conheceu?"
                options={source && source}
                component={Select}
              />
            </div>
          </form>
        </Content>
        <SubmitButton>
          <button type="button" onClick>
            Enviar
          </button>
        </SubmitButton>
      </Container>
    </>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'SCHEDULE_FORM',
  validate,
})(Form);
