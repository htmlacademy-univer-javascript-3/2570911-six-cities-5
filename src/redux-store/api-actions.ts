import { AxiosInstance } from 'axios';
import { Dispatch, State } from '../types/state-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateOffers, updateLoadingStatus, changeCity, updateAuthorizationStatus, updateUserName } from './action';
import { OfferType } from '../types/offer-type';
import { FullOfferType } from '../types/offer-full-description-type';
import { User } from '../types/user';
import { dropToken, saveToken } from '../api/token';
import { AuthData } from '../types/auth-data';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (_, {dispatch, extra: api}) => {
    try{
        const {data} = await api.get<OfferType[]>('/offers');
        console.log(data)
        dispatch(updateOffers(data));
        dispatch(changeCity(data[0].city));
        dispatch(updateLoadingStatus(true));    
    }
    catch (error){
        console.log(error)
    }

  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/check',
  async (_, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<User>('/login');
      dispatch(updateUserName(data.name));
      dispatch(updateAuthorizationStatus(true));
    } catch (error){
      if (error instanceof Error && (error as any)?.response?.status === 401) {
        dispatch(updateAuthorizationStatus(false));
      } else {
        console.error('Unexpected error:', error);
      }
    }
  },
);

export const authLogin = createAsyncThunk<void, AuthData, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/login',
  async (authData, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<User>('/login', authData);
      saveToken(data.token);
      dispatch(updateUserName(data.name));
      dispatch(updateAuthorizationStatus(true));
    }
    catch (error){
      console.log(error);
    }
  },
);

export const authLogout = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/logout',
  async (_, {dispatch, extra: api}) => {
    await api.delete('/logout');
    dropToken();
    dispatch(updateAuthorizationStatus(false));
  },
);

/*
export const fetchDetailOffer = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (offerId, {dispatch, extra: api}) => {
    try{
        const {data} = await api.get<FullOfferType>(`/offers/${offerId}`);
        console.log(data)
        dispatch(updateOffers(data));
        dispatch(changeCity(data[0].city));
        dispatch(updateLoadingStatus(true));    
    }
    catch (error){
        console.log(error)
    }

  },
);
*/