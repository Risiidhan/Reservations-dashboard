import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers, Store } from '@reduxjs/toolkit';
import { userReducer } from '../slices/UserSlice';
import { userMigrations } from './migrations';

const userPersistConfig = {
  key: 'user',
  version: 0,
  storage,
  migrate: createMigrate(userMigrations, { debug: false }),
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

export const persistedReducer = rootReducer;
export const createPersistor = (store: Store) => persistStore(store);
