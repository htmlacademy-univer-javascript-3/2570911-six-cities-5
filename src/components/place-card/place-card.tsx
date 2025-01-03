import { Link } from "react-router-dom";
import { OfferType } from "../../types/offer-type.tsx";
import { AppRoute } from "../../enums/route-types.tsx";

type PlaceCardProps = {
    offer: OfferType;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }

export function PlaceCard({offer : {id, isPremium, previewImage, price, isFavorite, rating, title, type}, onMouseEnter, onMouseLeave} : PlaceCardProps): JSX.Element {
    const link = AppRoute.Offer + "/" + id;
    return (
        <article className="cities__card place-card"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {(isPremium) && 
                <div className="place-card__mark">
                    <span>Premium</span>
                </div> 
            }
            <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                    <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
                </a>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className={`place-card__bookmark-button button ${isFavorite && "place-card__bookmark-button--active"} button`}
                        type="button">
                        <svg className="place-card__bookmark-icon" width={18} height={19}>
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">{isFavorite && "In bookmarks" || !(isFavorite) && "To bookmarks"}</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: `${rating * 20}%` }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={link}>{title}</Link>
                </h2>
                <p className="place-card__type">{type}</p>
            </div>
        </article>
    );
}