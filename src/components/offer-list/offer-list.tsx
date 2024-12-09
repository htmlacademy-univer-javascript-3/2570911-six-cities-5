import { OfferType } from '../../types/offer-type';
import { PlaceCard } from '../place-card/place-card';
import { useEffect, useState } from 'react';

export function OfferList({ offers, selectedOfferChange }:
  { offers: OfferType[], selectedOfferChange: (offerId: string | null) => void; }): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  useEffect(() => {
    console.log('Active offer ID changed:', activeOfferId); // Логируем изменение activeOfferId
    selectedOfferChange(activeOfferId); // Передаем выбранный оффер в родительский компонент
  }, [activeOfferId, selectedOfferChange]);

  const handleMouseEnter = (offerId: string) => {
    console.log('Mouse entered on offer:', offerId); // Логируем, когда мышь заходит на карточку
    setActiveOfferId(offerId); // Устанавливаем активный оффер
  };

  const handleMouseLeave = () => {
    console.log('Mouse left the offer'); // Логируем, когда мышь уходит с карточки
    setActiveOfferId(null); // Сбрасываем активный оффер
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={() => handleMouseEnter(offer.id)} // Наведение на карточку
          onMouseLeave={handleMouseLeave} // Уход с карточки
        />))}
    </div>
  );
}
