import { useNavigate, useParams } from "react-router-dom";
import { ReviewForm } from "../../components/review-form/review-form";
import { ReviewList } from "../../components/review-list/review-list";
import Map from "../../components/map/map";
import { MapType } from "../../enums/mapTypes";
import NearbyOffersList from "../../components/nearby-offers/nearby-offers";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { useCallback, useEffect, useState } from "react";
import { Header } from "../../components/header/header";
import { changeOfferFavoriteStatus, fetchDetailOffer, fetchNearbyOffers, fetchReviews } from "../../redux-store/api-actions";
import { AppRoute } from "../../enums/route-types";
import { OfferType } from "../../types/offer-type";

export function Offer(){
    let {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    if (!id){
      id = '';
    }
    useEffect(() => {
      if (id) {
        dispatch(fetchDetailOffer({ offerId : id, navigate}));
        dispatch(fetchNearbyOffers({offerId : id}));
        dispatch(fetchReviews({offerId : id}));
      }
    }, [dispatch, id]);

    
    


    const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
    const reviews = useAppSelector((state) => state.reviews);
    let currentOffer = useAppSelector((state) => state.selectedOffer);
    let nearbyOffers = useAppSelector((state) => state.nearbyOffers);
    const isAuthorized = useAppSelector((state) => state.isAuthorized);
    if (!currentOffer) {
      return <div>Offer not found</div>;
    }
    nearbyOffers = nearbyOffers.filter((offer) => offer.id !== currentOffer.id).slice(0, 3);
    const simpleCurrentOffer : OfferType = {
      id: currentOffer.id,
      title: currentOffer.title,
      type: currentOffer.type,
      previewImage: currentOffer.images[0],
      city: currentOffer.city,
      location: currentOffer.location,
      price: currentOffer.price,
      isFavorite: currentOffer.isFavorite,
      isPremium: currentOffer.isPremium,
      rating: currentOffer.rating
    }
    return (
      <div className="page">
        <Header />
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
                    <svg className={`${currentOffer.isFavorite ? `offer__bookmark-icon-active` : `offer__bookmark-icon`}`} width={31} height={33}>
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: `${(Math.round(currentOffer.rating) / 5) * 100}%` }}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{Math.round(currentOffer.rating)}</span>
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
                      currentOffer.goods.map((item) => ( <li key={currentOffer.goods.indexOf(item)} className="offer__inside-item">{item}</li>))
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
                      Reviews · <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewList offerReviews={reviews}/>
                  {isAuthorized && <ReviewForm offerId={id}></ReviewForm>}
                </section>
              </div>
            </div>
            {nearbyOffers 
            ? (<Map city={currentOffer.city} offers={nearbyOffers.concat(simpleCurrentOffer)} mapType={MapType.offerMap} selectedOffer={simpleCurrentOffer}/>)
            : (<Map city={currentOffer.city} offers={[]} mapType={MapType.offerMap} selectedOffer={simpleCurrentOffer}/>)
            }
          </section>
          {nearbyOffers 
          ? (<NearbyOffersList offers={nearbyOffers} selectedOfferChange={setActiveOfferId} />)
          : <section className="near-places places">
              <h2 className="near-places__title">
                No offers nearby
              </h2>
            </section>
          }
        </main>
      </div>);
  }