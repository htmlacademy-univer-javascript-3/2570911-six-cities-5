import { combineReducers } from '@reduxjs/toolkit';
import { appStatesReducer } from './reducers/app-reducer';
import { userStatesReducer } from './reducers/user-reducer';
import { mainpageStatesReducer } from './reducers/mainpage-reducer';
import { selectedOfferStatesReducer } from './reducers/selected-offer-reducer';


export const headReducer = combineReducers(
  {
    app : appStatesReducer,
    user : userStatesReducer,
    mainpage : mainpageStatesReducer,
    selectedOffer : selectedOfferStatesReducer
  })