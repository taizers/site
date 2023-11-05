import { configureStore, combineReducers } from '@reduxjs/toolkit';
import InfoReducer from './redusers/infoSlice';

const RootReducer = combineReducers({
  info: InfoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: RootReducer,
  });
};

export type RootState = ReturnType<typeof RootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
