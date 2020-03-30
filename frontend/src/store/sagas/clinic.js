import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import * as services from '~/services/clinic';

import { formatCpf, error } from '~/util/format';
import { Types } from '../ducks/clinic';

export function* findSpecialties() {
  try {
    const { data: speciality } = yield call(services.specialties);

    yield put({
      type: Types.SPECIALTIES_SUCCESS,
      payload: { data: speciality.content },
    });
  } catch (err) {
    toast.error(error);
    yield put({
      type: Types.REQUEST_FAILURE,
    });
  }
}

export function* findProfessionals({ payload }) {
  const { data } = payload;

  try {
    if (!data.refresh) {
      history.push('professionals');
    }

    const { data: professional } = yield call(
      services.professionals,
      data.especialidade_id || data.id,
    );

    yield put({
      type: Types.PROFESSIONALS_SUCCESS,
      payload: { data: professional.content },
    });
  } catch (err) {
    toast.error(err.response.data.error);
    yield put({
      type: Types.REQUEST_FAILURE,
    });
  }
}

export function* findSource() {
  try {
    const { data } = yield call(services.source);

    yield put({
      type: Types.SOURCE_SUCCESS,
      payload: { data: data.content },
    });
  } catch (err) {
    toast.error(error);
    yield put({
      type: Types.REQUEST_FAILURE,
    });
  }
}

export function* saveSchedule({ payload }) {
  const { professional, user } = yield select((state) => state.clinic);

  const {
    name,
    email,
    source,
    birthdate,
    date_time,
    cpf: register,
  } = payload.data;
  const { profissional_id: professional_id, especialidades } = professional;

  const cpf = formatCpf(register);

  const specialitysIds = especialidades
    .map((speciality) => {
      return speciality.especialidade_id;
    })
    .filter((item) => item);

  const dataFormatted = {
    name,
    email,
    professional_id,
    source_id: source.origem_id,
    birthdate,
    cpf,
    date_time,
    specialties: specialitysIds,
  };

  try {
    yield call(services.schedule, dataFormatted);
    yield put({
      type: Types.SCHEDULES_SUCCESS,
    });

    toast.success(
      `${user?.name}, seu pedido de agendamento foi enviado com sucesso`,
    );
    history.push('professionals');
  } catch (err) {
    toast.error(
      `${user?.name}, ocorreu um erro ao processar seu agendamento. Verifique seus dados`,
    );
    yield put({
      type: Types.REQUEST_FAILURE,
    });
  }
}

export function getProfessionalSelected() {
  history.push('Form');
}

export default all([
  takeLatest(Types.SPECIALTIES_REQUEST, findSpecialties),
  takeLatest(Types.PROFESSIONALS_REQUEST, findProfessionals),
  takeLatest(Types.PROFESSIONAL_SELECTED, getProfessionalSelected),
  takeLatest(Types.SOURCE_REQUEST, findSource),
  takeLatest(Types.SCHEDULES_REQUEST, saveSchedule),
]);
