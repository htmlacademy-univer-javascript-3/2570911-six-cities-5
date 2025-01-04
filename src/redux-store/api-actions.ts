import { AxiosInstance } from 'axios';
import { Dispatch, State } from '../types/state-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateOffers, updateLoadingStatus, changeCity } from './action';
import { OfferType } from '../types/offer-type';
import { FullOfferType } from '../types/offer-full-description-type';

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