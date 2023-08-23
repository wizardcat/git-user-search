import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './redusers/searchSlice';

const rootReduser = combineReducers({
  userInfoReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
