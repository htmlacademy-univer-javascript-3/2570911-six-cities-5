import { Link } from "react-router-dom";
import { OfferType } from "../../types/offer-type"
import { Header } from "../../components/header/header";
import { FavouriteOffer } from "../../components/favourite-offer/favourite-offer";

export function Favorites({offers} : {offers : OfferType[]}){
    const favorites_places = offers.filter((offer) => offer.isFavorite);
    const cities = Array.from(new Set(favorites_places.map((offer) => offer.city.name))).sort();

    return (
        <div className="page">
          <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.length > 0 
              ? (cities.map((city) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favorites_places
                        .filter((favorite) => favorite.city.name === city)
                        .map((favorite) => (
                          <FavouriteOffer  key={favorite.id} offer={favorite}/>
                        ))}
                    </div>
                  </li>
                ))
              ) 
              : (
                <li style={{textAlign: 'center', marginTop: '15%', fontSize: '32px'}}>Nothing yet saved</li>
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>
    )
}