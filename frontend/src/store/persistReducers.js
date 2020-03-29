import storage from 'redux-persist/lib/storage';
import { persistReducer, createTransform } from 'redux-persist';
import { encode, decode } from '~/store/createTransform';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'clinic-service',
      storage,
      transforms: [createTransform(encode, decode)],
      whitelist: ['clinic'],
    },
    reducers,
  );

  return persistedReducer;
};
