import { SortTypes } from "../enums/sortTypes";
import { CityType } from "./city-type";
import { OfferType } from "./offer-type";
import { ReviewType } from "./reviews-type";

export type StateType = {
    city: CityType;
    offersList: OfferType[];
    reviews: ReviewType[];
    sortType : SortTypes;
  };