import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm, submit } from 'redux-form';

import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Select from '~/components/FormFields/Select';

import { getProfessionals } from '~/store/ducks/clinic';

import {
  Container,
  Content,
  DoctorsContainer,
  ButtonContainer,
  Doctor,
  Wrapper,
} from './styles';

function Specialties({ handleSubmit }) {
  const dispatch = useDispatch();

  const { specialties, professionals } = useSelector((state) => state.clinic);

  const transformData = (data) => {
    return {
      id: data.especialidade_id,
      refresh: true,
    };
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Resultados da busca</h1>
          <form id="Form" onSubmit={handleSubmit}>
            <Field
              name="speciality"
              htmlFor="speciality"
              placeholder="Selecione uma especialidade"
              options={specialties && specialties}
              component={Select}
              onChange={(values) =>
                submit(dispatch(getProfessionals(transformData(values))))
              }
            />
          </form>
        </Content>

        <DoctorsContainer>
          {professionals?.map((professional) => (
            <Doctor>
              <Wrapper>
                <img
                  src={
                    professional.foto
                      ? professional.foto
                      : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }
                  alt="Clinic"
                />
                <div>
                  <h4>{professional.nome.toLowerCase()}</h4>
                  <span>
                    {professional.documento_conselho
                      ? professional.documento_conselho
                      : 'Não possui CRM cadastrado'}
                  </span>
                </div>
              </Wrapper>
              <ButtonContainer>
                <button type="button">Agendar</button>
              </ButtonContainer>
            </Doctor>
          ))}
        </DoctorsContainer>
      </Container>
    </>
  );
}

Specialties.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'PROFESSIONAL_FORM',
})(Specialties);
