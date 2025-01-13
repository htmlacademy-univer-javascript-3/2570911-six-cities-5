import { OfferType } from '../../types/offer-type';
import { PlaceCard } from '../place-card/place-card';
import { useEffect, useState } from 'react';

export function OfferList({ offers, selectedOfferChange }:
  { offers: OfferType[], selectedOfferChange: (offerId: string | null) => void; }): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  useEffect(() => {
    selectedOfferChange(activeOfferId); 
  }, [activeOfferId, selectedOfferChange]);

  const handleMouseEnter = (offerId: string) => {
    setActiveOfferId(offerId); 
  };

  const handleMouseLeave = () => {
    setActiveOfferId(null); 
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleMouseEnter(offer.id)} 
          onMouseLeave={handleMouseLeave} 
        />))}
    </div>
  );
}
