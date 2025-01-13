import {store} from '../redux-store';
import { SortTypes } from "../enums/sortTypes";
import { CityType } from "./city-type";
import { FullOfferType } from "./offer-full-description-type";
import { OfferType } from "./offer-type";
import { ReviewType } from "./reviews-type";

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;


export type AppStates = {
    isLoaded : boolean;
}

export type MainPageStates = {
    city: CityType;
    offersList: OfferType[];
    sortType : SortTypes;
}

export type UserStates = {
    userName : string;
    isAuthorized : boolean;
    favourites : OfferType[];
}

export type SelectedOfferStates = {
    selectedOffer : FullOfferType | undefined;
    nearbyOffers : OfferType[];
    reviews: ReviewType[];
}