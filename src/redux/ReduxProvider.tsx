'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createPersistor } from './persist/persistConfig';

const persistor = createPersistor(store);

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
  