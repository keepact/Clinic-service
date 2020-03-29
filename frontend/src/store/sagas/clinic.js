import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import * as services from '~/services/clinic';

import { Types } from '../ducks/clinic';

export function* findSpecialties() {
  try {
    const { data: speciality } = yield call(services.specialties);

    yield put({
      type: Types.SPECIALTIES_SUCCESS,
      payload: { data: speciality.content },
    });
  } catch (err) {
    toast.error(err.response.data.error);
    yield put({
      type: Types.REQUEST_FAILURE,
    });
  }
}

export function* findProfessionals({ payload }) {
  const { data } = payload;

  try {
    const { data: professional } = yield call(
      services.professionals,
      data.id || data,
    );

    yield put({
      type: Types.PROFESSIONALS_SUCCESS,
      payload: { data: professional.content },
    });

    if (!data.refresh) {
      history.push('professionals');
    }
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
    toast.error(err.response.data.error);
    yield put({
      type: Types.REQUEST_FAILURE,
    });
  }
}

export default all([
  takeLatest(Types.SPECIALTIES_REQUEST, findSpecialties),
  takeLatest(Types.PROFESSIONALS_REQUEST, findProfessionals),
  takeLatest(Types.SOURCE_REQUEST, findSource),
]);
