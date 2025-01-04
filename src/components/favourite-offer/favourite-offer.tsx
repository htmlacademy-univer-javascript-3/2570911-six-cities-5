import { Link } from "react-router-dom";
import { AppRoute } from "../../enums/route-types";
import { OfferType } from "../../types/offer-type";
import { useCallback } from "react";
import { changeOfferFavoriteStatus } from "../../redux-store/api-actions";
import { useAppDispatch } from "../../hooks/storeHooks";

export function FavouriteOffer({offer} : {offer : OfferType}) : JSX.Element{
    const dispatch = useAppDispatch();
    const onBannerClick = useCallback(() => {
            dispatch(changeOfferFavoriteStatus({offerId: offer.id, status: +!offer.isFavorite}));
          }, [, dispatch, offer.id, offer.isFavorite]);
    return (
        <>
            <article className="favorites__card place-card">
            {offer.isPremium &&
                <div className="place-card__mark">
                <span>Premium</span>
                </div>}
            <div className="favorites__image-wrapper place-card__image-wrapper">
                <Link to={`${AppRoute.Offer}/${offer.id}`}>
                <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
                </Link>
            </div>
            <div className="favorites__card-info place-card__info">
                <div className="place-card__price-wrapper">
                <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{offer.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button onClick={onBannerClick} className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                </button>
                </div>
                <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                    <span style={{ width: `${(Math.round(offer.rating) / 5) * 100}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                </div>
                </div>
                <h2 className="place-card__name">
                <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
                </h2>
                <p className="place-card__type">{offer.type[0].toUpperCase() + offer.type.substring(1)}</p>
            </div>
            </article>
        </>
    )
}