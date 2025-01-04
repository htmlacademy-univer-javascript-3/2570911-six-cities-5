import { SortTypes } from "../enums/sortTypes";
import { CityType } from "./city-type";
import { FullOfferType } from "./offer-full-description-type";
import { OfferType } from "./offer-type";
import { ReviewType } from "./reviews-type";

export type StateType = {
    city: CityType;
    offersList: OfferType[];
    reviews: ReviewType[];
    sortType : SortTypes;
    isLoaded : boolean;
    isAuthorized : boolean;
    userName : string;
    selectedOffer : FullOfferType | undefined;
    nearbyOffers : OfferType[];
    favourites : OfferType[];
  };