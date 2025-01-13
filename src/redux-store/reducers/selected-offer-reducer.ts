import { createReducer } from "@reduxjs/toolkit";
import { SelectedOfferStates } from "../../types/state-types";
import { updateReviews, updateOffersNearby, updateSelectedOffer } from "../actions";

export const initialState : SelectedOfferStates = {
    selectedOffer: undefined,
    nearbyOffers: [],
    reviews: []
}

export const selectedOfferStatesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateReviews, (state, {payload}) => {
          state.reviews = payload;
        })
    .addCase(updateOffersNearby, (state, {payload}) => {
          state.nearbyOffers = payload;
        })
    .addCase(updateSelectedOffer, (state, {payload}) => {
          state.selectedOffer = payload;
        })
});