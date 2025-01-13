import { OfferType } from "../../types/offer-type";
import { CitiesList } from "../../components/city-list/city-list";
import { CITIESFULLINFO } from "../../consts/cities";
import { useAppSelector } from "../../hooks/storeHooks";
import { useEffect, useState } from "react";
import { SortTypes } from "../../enums/sortTypes";
import { CityOfferList } from "../../components/city-offer-list/city-offer-list";
import { Header } from "../../components/header/header";

export function MainPage(){
    const offers = useAppSelector((state) => state.mainpage.offersList); 
    const city = useAppSelector((state) => state.mainpage.city);
    const currentSortType = useAppSelector((state) => state.mainpage.sortType);

    const [currentCityOffers, setCurrentCityOffers] = useState<OfferType[]>(offers);
    const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
    const selectedOffer = offers.find((offer) => offer.id === activeOfferId);

    useEffect(() => {
        const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
        setCurrentCityOffers(filteredOffers);
    }, [city, offers]);

    useEffect(() => {
        const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    
        const sortedOffers = [...filteredOffers].sort((offer1, offer2) => {
          switch (currentSortType) {
            case SortTypes.LowHigh:
              return offer1.price - offer2.price;
            case SortTypes.HighLow:
              return offer2.price - offer1.price;
            case SortTypes.Rated:
              return offer2.rating - offer1.rating;
            default:
              return 0;
          }
        });
    
        setCurrentCityOffers(sortedOffers);
      }, [city, offers, currentSortType]);

    return(
        <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CITIESFULLINFO}/>
          </section>
        </div>
        <div className="cities">
            <CityOfferList city={city} currentCityOffers={currentCityOffers} selectedOffer={selectedOffer} selectedOfferChange={setActiveOfferId}/>
        </div>
      </main>
    </div>
  );
}