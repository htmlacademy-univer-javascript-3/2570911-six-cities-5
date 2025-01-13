import { createReducer } from "@reduxjs/toolkit";
import { UserStates } from "../../types/state-types";
import { updateUserName, updateAuthorizationStatus, updateFavourites } from "../actions.ts";

export const initialState : UserStates = {
    userName: "",
    isAuthorized: false,
    favourites: []
}

export const userStatesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateUserName, (state, {payload}) => {
        state.userName = payload;
        })
    .addCase(updateAuthorizationStatus, (state, { payload }) => {
          state.isAuthorized = payload;
        })
    .addCase(updateFavourites, (state, {payload}) => {
          state.favourites = payload;
        })
});