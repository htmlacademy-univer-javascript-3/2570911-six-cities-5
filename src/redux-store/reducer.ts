
import { createReducer } from '@reduxjs/toolkit';
import { updateOffers, changeCity, updateReviews } from './action';
import { OfferType } from '../types/offer-type';
import { offers } from '../mocks/offers';
import { ReviewType } from '../types/reviews-type';
import { reviews } from '../mocks/reviews';
import { CityType } from '../types/city-type';
import { CitiesFullInfo } from '../consts/cities';

type StateType = {
  city: CityType;
  offersList: OfferType[];
  reviews: ReviewType[];
};

const initialState: StateType = {
  city: CitiesFullInfo.Paris,
  offersList: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(updateOffers, (state) => {
      state.offersList = offers;
    })
    .addCase(updateReviews, (state) => {
      state.reviews = reviews;
    });
});