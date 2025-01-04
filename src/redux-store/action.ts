import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types/offer-type';
import { ReviewType } from '../types/reviews-type';
import { CityType } from '../types/city-type';
import { SortTypes } from '../enums/sortTypes';
import { FullOfferType } from '../types/offer-full-description-type';

export const updateOffers = createAction<OfferType[]>('offers/update');
export const changeCity = createAction<CityType>('city/change');
export const updateReviews = createAction<ReviewType[]>('reviews/update');
export const reSort = createAction<SortTypes>('reSort');
export const updateSelectedOffer = createAction<FullOfferType>('offer/update');
export const updateLoadingStatus = createAction<boolean>('loading/update');
export const updateAuthorizationStatus = createAction<boolean>('authorization/update');
export const updateUserName = createAction<string>('name/update');
export const updateOffersNearby = createAction<OfferType[]>('nearbyOffers/update');
export const updateFavourites = createAction<OfferType[]>('favourites/update');