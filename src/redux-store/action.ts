import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer-type';
import { ReviewType } from '../types/reviews-type';
import { CityType } from '../types/city-type';
import { SortTypes } from '../enums/sortTypes';

export const updateOffers = createAction<OfferType[]>('offers/updateOffers');
export const changeCity = createAction<CityType>('city/changeCity');
export const updateReviews = createAction<ReviewType[]>('reviews/updateReviews');
export const reSort = createAction<SortTypes>('reSort');
export const setCurrentOfferId = createAction<string>('offer/set');
export const updateLoadingStatus = createAction<boolean>('loading/set');