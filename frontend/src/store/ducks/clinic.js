import produce from 'immer';

// Action Types

export const Types = {
  PROFESSIONALS_REQUEST: '@clinic/PROFESSIONALS_REQUEST',
  PROFESSIONALS_SUCCESS: '@clinic/PROFESSIONALS_SUCCESS',
  PROFESSIONAL_SELECTED: '@clinic/PROFESSIONAL_SELECTED',
  SPECIALTIES_REQUEST: '@clinic/SPECIALTIES_REQUEST',
  SPECIALTIES_SUCCESS: '@clinic/SPECIALTIES_SUCCESS',
  SOURCE_REQUEST: '@clinic/SOURCE_REQUEST',
  SOURCE_SUCCESS: '@clinic/SOURCE_SUCCESS',
  REQUEST_FAILURE: '@clinic/REQUEST_FAILURE',
};

// Reducer

const INITIAL_STATE = {
  loading: false,
  professionals: [],
  professional: {},
  specialties: [],
  source: [],
};

export default function clinic(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.SPECIALTIES_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.SPECIALTIES_SUCCESS: {
        draft.specialties = action.payload.data;
        draft.loading = false;
        break;
      }
      case Types.PROFESSIONALS_REQUEST: {
        draft.loading = true;
        break;
      }
      case Types.PROFESSIONALS_SUCCESS: {
        draft.professionals = action.payload.data;
        draft.loading = false;
        break;
      }
      case Types.SOURCE_REQUEST: {
        draft.loading = false;
        break;
      }
      case Types.SOURCE_SUCCESS: {
        draft.source = action.payload.data;
        break;
      }
      case Types.PROFESSIONAL_SELECTED: {
        draft.professional = action.payload.data;
        break;
      }
      case Types.REQUEST_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

// Action Creators

export function getSpecialties() {
  return {
    type: Types.SPECIALTIES_REQUEST,
  };
}

export function getProfessionals(id) {
  return {
    type: Types.PROFESSIONALS_REQUEST,
    payload: { id },
  };
}

export function getSource() {
  return {
    type: Types.SOURCE_REQUEST,
  };
}

export function saveProfessional(data) {
  return {
    type: Types.PROFESSIONAL_SELECTED,
    payload: { data },
  };
}
