import { AxiosInstance } from 'axios';
import { Dispatch, State } from '../types/state-types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateOffers, updateLoadingStatus, changeCity, updateAuthorizationStatus, updateUserName, updateSelectedOffer, updateReviews, updateOffersNearby, updateFavourites } from './action';
import { OfferType } from '../types/offer-type';
import { FullOfferType } from '../types/offer-full-description-type';
import { User } from '../types/user';
import { dropToken, saveToken } from '../api/token';
import { AuthData } from '../types/auth-data';
import { ReviewType } from '../types/reviews-type';
import { NavigateFunction } from 'react-router-dom';

export const fetchOffers = createAsyncThunk<void, {isSityChangedZero : boolean}, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async ({isSityChangedZero}, {dispatch, extra: api}) => {
    try{
        const {data} = await api.get<OfferType[]>('/offers');
        dispatch(updateOffers(data));
        if (isSityChangedZero){
          dispatch(changeCity(data[0].city));
        }
        dispatch(updateLoadingStatus(true));    
    }
    catch (error){
        return;
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
        return;
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
      dispatch(fetchOffers({isSityChangedZero : true}));
      dispatch(getFavorites());
    }
    catch (error){
      return;
    }
  },
);

export const getFavorites = createAsyncThunk<void, undefined, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favorite/get',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`/favorite`);
    dispatch(updateFavourites(data));
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
    dispatch(fetchOffers({isSityChangedZero : true}))
  },
);

export const fetchDetailOffer = createAsyncThunk<void, {offerId : string, navigate: NavigateFunction}, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fullOffer/fetch',
  async ({offerId, navigate}, {dispatch, extra: api }) => {
    try{
        const {data} = await api.get<FullOfferType>(`/offers/${offerId}`);
        dispatch(updateSelectedOffer(data)); 
        dispatch(fetchNearbyOffers({offerId}));
    }
    catch (error){
        navigate('/error404')
    }

  },
);

export const fetchReviews = createAsyncThunk<void, {offerId : string}, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'rewiew/fetch',
  async ({offerId}, {dispatch, extra: api}) => {
    try{
        const {data} = await api.get<ReviewType[]>(`/comments/${offerId}`);
        dispatch(updateReviews(data)); 
    }
    catch (error){
      return;
    }

  },
);

export const fetchNearbyOffers = createAsyncThunk<void, {offerId : string}, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'nearbyOffer/fetch',
  async ({offerId}, {dispatch, extra: api, }) => {
    try{
        const {data} = await api.get<OfferType[]>(`/offers/${offerId}/nearby`);
        dispatch(updateOffersNearby(data)); 
    }
    catch (error){
        return; 
    }

  },
);

export const postUserReview = createAsyncThunk<void, {comment : string, rating : number, id : string}, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'userReview/post',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    try {

      await api.post(`/comments/${id}`, {comment : comment, rating : Number(rating)});
      dispatch(fetchReviews({offerId : id}));
    }
    catch (error){
      return;
    }
    
  },
);

export const changeOfferFavoriteStatus = createAsyncThunk<void, {offerId : string, status : number}, {
  dispatch: Dispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerFavouriteStatus/change',
  async ({offerId, status}, {dispatch, extra: api}) => {
    await api.post(`favorite/${offerId}/${status}`);
    dispatch(fetchOffers({isSityChangedZero : false}));
    dispatch(getFavorites());
  },
);