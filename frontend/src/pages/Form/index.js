import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import PropTypes from 'prop-types';

import { GiHealthPotion } from 'react-icons/gi';

import DatePicker from '~/components/FormFields/DatePicker';
import Select from '~/components/FormFields/Select';
import Input from '~/components/FormFields/Input';
import NumberInput from '~/components/FormFields/Number';

import Button from '~/components/Button';
import Animation from '~/components/Animation';
import loadingAnimation from '~/assets/animations/loading.json';

import history from '~/services/history';
import { validate } from '~/util/validate';
import { getSource, createSchedule } from '~/store/ducks/clinic';

import {
  Container,
  Content,
  Wrapper,
  TitleContainer,
  DescriptionContainer,
} from './styles';

function Form({ handleSubmit, submitting, pristine }) {
  const dispatch = useDispatch();
  const { source, professional, loading } = useSelector(
    (state) => state.clinic,
  );

  useEffect(() => {
    dispatch(getSource());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Animation animation={loadingAnimation} />
      ) : (
        <>
          <Wrapper>
            <Button
              width="200px"
              padding="0 10px"
              onClick={() => history.push('/professionals')}>
              Voltar
            </Button>

            <DescriptionContainer>
              <GiHealthPotion size={30} />
              <div>
                <p>
                  {professional?.sexo === 'Masculino' ? 'Doutor' : 'Doutora'}{' '}
                  {professional?.nome?.toLowerCase()}
                </p>
                <div>
                  Especialidades:{' '}
                  {professional?.especialidades?.map((p) => (
                    <p key={p.especialidade_id}>{p.nome_especialidade}</p>
                  ))}
                </div>
              </div>
            </DescriptionContainer>
          </Wrapper>
          <TitleContainer>
            <h1>Preencha abaixo os dados para o agendamento</h1>
          </TitleContainer>

          <Container>
            <Content>
              <form
                id="Form"
                autoComplete="off"
                onSubmit={handleSubmit((values) =>
                  dispatch(createSchedule(values)),
                )}>
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
                  <div>
                    <Field
                      name="birthdate"
                      htmlFor="birthdate"
                      placeholderText="Nascimento"
                      component={DatePicker}
                    />
                  </div>
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
                  <div>
                    <Field
                      name="date_time"
                      htmlFor="date_time"
                      placeholderText="Data do Agendamento"
                      showTimeSelect
                      component={DatePicker}
                    />
                  </div>
                  <div>
                    <Field
                      name="source"
                      htmlFor="source"
                      placeholder="Como conheceu?"
                      options={source && source}
                      component={Select}
                    />
                  </div>
                </div>
              </form>
            </Content>
            <Button
              form="Form"
              disabled={pristine || submitting}
              typeButton="submit">
              Enviar
            </Button>
          </Container>
        </>
      )}
    </>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'SCHEDULE_FORM',
  validate,
})(Form);
