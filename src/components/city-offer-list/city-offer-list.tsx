import { MapType } from "../../enums/mapTypes";
import { CityType } from "../../types/city-type";
import { OfferType } from "../../types/offer-type";
import { OfferList } from "../offer-list/offer-list";
import Map from "../map/map";
import Sorting from "../sorting/sortings";

export function CityOfferList({city, currentCityOffers, selectedOffer, selectedOfferChange }:
   {city : CityType, currentCityOffers : OfferType[], selectedOffer : OfferType | undefined, selectedOfferChange : (offerId: string | null) => void; }) : JSX.Element{
    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${currentCityOffers.length} places to stay in ${city.name}`}</b>
          <Sorting />
          {currentCityOffers.length > 0
          ? (<OfferList offers={currentCityOffers} selectedOfferChange={selectedOfferChange}/>)
          : (<p>No places to stay available</p>)
          }
        </section>
        <div className="cities__right-section">
          <Map city={city} offers={currentCityOffers} mapType={MapType.mainMap} selectedOffer={selectedOffer}/>
        </div>
      </div>
    )
}