import { createAPI } from '../api/api.ts';
import {reducer} from './reducer.ts';
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});