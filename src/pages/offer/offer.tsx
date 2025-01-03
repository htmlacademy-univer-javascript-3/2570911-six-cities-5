import { fullOffers } from "../../mocks/detailed-offer";
import { useParams } from "react-router-dom";
import { reviews } from "../../mocks/reviews";
import { ReviewForm } from "../../components/review-form/review-form";
import { ReviewList } from "../../components/review-list/review-list";
import Map from "../../components/map/map";
import { MapType } from "../../enums/mapTypes";
import NearbyOffersList from "../../components/nearby-offers/nearby-offers";
import { nearbyOffers } from "../../mocks/nearby-offers";
import { useAppSelector } from "../../hooks/storeHooks";
import { useState } from "react";

export function Offer(){
    const {id} = useParams<{ id: string }>();
    const offers = useAppSelector((state) => state.offersList);
    const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
    const selectedOffer = offers.find((offer) => offer.id === activeOfferId);

    let currentOffer = fullOffers.find((offer) => offer.id === id)
    let offerReviews = reviews.filter((offer) => offer.id === id)
    let currentOfferNearbies = nearbyOffers.find((offer) => offer.id === id);
    if (!currentOffer) {
      return <div>Offer not found</div>;
    }
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width={81}
                    height={41}
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                      </span>
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
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
              {currentOffer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {currentOffer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
                }
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                      {currentOffer.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${(currentOffer.rating / 5) * 100}%` }}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                      {currentOffer.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                      {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                      Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{currentOffer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">Whats inside</h2>
                  <ul className="offer__inside-list">
                    {
                      currentOffer.goods.map((item) => ( <li className="offer__inside-item">{item}</li>))
                    }
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={currentOffer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{currentOffer.host.name}</span>
                    {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                        {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">
                      Reviews · <span className="reviews__amount">{offerReviews.length}</span>
                  </h2>
                  <ReviewList offerReviews={offerReviews}/>
                  <ReviewForm></ReviewForm>
                </section>
              </div>
            </div>
            {currentOfferNearbies 
            ? (<Map city={currentOffer.city} offers={currentOfferNearbies.nearbyOffersIds} mapType={MapType.offerMap} selectedOffer={selectedOffer}/>)
            : (<Map city={currentOffer.city} offers={[]} mapType={MapType.offerMap} selectedOffer={selectedOffer}/>)
            }
          </section>
          {currentOfferNearbies 
          ? (<NearbyOffersList offers={currentOfferNearbies.nearbyOffersIds} selectedOfferChange={setActiveOfferId} />)
          : <section className="near-places places">
              <h2 className="near-places__title">
                No offers nearby
              </h2>
            </section>
          }
        </main>
      </div>);
  }