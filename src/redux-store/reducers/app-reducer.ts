import { createReducer } from "@reduxjs/toolkit";
import { AppStates } from "../../types/state-types";
import { updateLoadingStatus } from "../actions.ts";

const initialState: AppStates = {
  isLoaded : false
};

export const appStatesReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(updateLoadingStatus, (state, { payload }) => {
        state.isLoaded = payload;
      });
});
