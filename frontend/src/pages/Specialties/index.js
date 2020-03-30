import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reduxForm, submit } from 'redux-form';

import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Select from '~/components/FormFields/Select';
import Animation from '~/components/Animation';
import loadingAnimation from '~/assets/animations/loading.json';

import { getProfessionals, saveProfessional } from '~/store/ducks/clinic';

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
  const { specialties, speciality, professionals, loading } = useSelector(
    (state) => state.clinic,
  );
  const transformData = (data) => {
    return {
      id: data.especialidade_id,
      nome: data.nome,
      refresh: true,
    };
  };

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <Animation animation={loadingAnimation} />
        ) : (
          <>
            <Content>
              <h1>Resultados da busca por {speciality.nome}</h1>
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
                <Doctor key={professional.profissional_id}>
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
                    <button
                      type="button"
                      onClick={() => dispatch(saveProfessional(professional))}>
                      Agendar
                    </button>
                  </ButtonContainer>
                </Doctor>
              ))}
            </DoctorsContainer>
          </>
        )}
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
