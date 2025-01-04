import { createReducer } from '@reduxjs/toolkit';
import { changeCity, updateLoadingStatus, updateOffers, reSort } from './action';
import { StateType } from '../types/state-type';
import { SortTypes } from '../enums/sortTypes';

const initialState: StateType = {
  city: {location:{latitude:0, longitude:0, zoom:0}, name:''},
  offersList: [],
  sortType: SortTypes.Popular,
  isLoaded: false,
  reviews : []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(updateOffers, (state, { payload }) => {
      state.offersList = payload;
    })
    .addCase(reSort, (state, { payload }) => {
      state.sortType = payload;
      const arrayForSort = [...state.offersList];
      switch (payload) {
        case SortTypes.Popular:
          state.offersList = arrayForSort;
          break;
        case SortTypes.HighLow:
          state.offersList = arrayForSort.sort((a, b) => b.price - a.price);
          break;
        case SortTypes.LowHigh:
          state.offersList = arrayForSort.sort((a, b) => a.price - b.price);
          break;
        case SortTypes.Rated:
          state.offersList = arrayForSort.sort((a, b) => b.rating - a.rating);
          break;
      }
    })
    .addCase(updateLoadingStatus, (state, { payload }) => {
      state.isLoaded = payload;
    });
});