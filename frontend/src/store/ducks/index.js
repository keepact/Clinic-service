import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import clinic from './clinic';

export default combineReducers({
  clinic,
  form: formReducer,
});
