import { OfferList } from "../../components/offer-list/offer-list";
import { OfferType } from "../../types/offer-type";
import Map from "../../components/map/map";
import { MapType } from "../../enums/mapTypes";
import { CitiesList } from "../../components/city-list/city-list";
import { Cities, CitiesFullInfo } from "../../consts/cities";
import { useAppSelector } from "../../hooks/storeHooks";
import { useEffect, useState } from "react";
import { SortTypes } from "../../enums/sortTypes";
import { CityOfferList } from "../../components/city-offer-list/city-offer-list";

export function MainPage(){
    const offers = useAppSelector((state) => state.offersList); 
    const city = useAppSelector((state) => state.city);
    const currentSortType = useAppSelector((state) => state.sortType);

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
        <header className="header">
            <div className="container">
            <div className="header__wrapper">
                <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
                </div>
                <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                    </a>
                    </li>
                    <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                        <span className="header__signout">Sign out</span>
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </header>

        <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CitiesFullInfo}/>
          </section>
        </div>
        <div className="cities">
            <CityOfferList city={city} currentCityOffers={currentCityOffers} selectedOffer={selectedOffer} selectedOfferChange={setActiveOfferId}/>
        </div>
      </main>
    </div>
  );
}