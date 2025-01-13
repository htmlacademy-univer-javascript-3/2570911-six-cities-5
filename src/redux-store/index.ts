import { createAPI } from '../api/api.ts';
import {headReducer} from './head-reducer.ts';
import {configureStore} from '@reduxjs/toolkit';

const api = createAPI();

export const store = configureStore({
  reducer : headReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});