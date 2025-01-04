import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from '../../hooks/useMap';
import { CityType } from '../../types/city-type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../consts/const';
import { OfferType } from '../../types/offer-type';
import { MapType } from '../../enums/mapTypes';

export default function Map({ city, offers, mapType, selectedOffer }:
  { city: CityType, offers: OfferType[], mapType: MapType, selectedOffer: OfferType | undefined }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: selectedOffer && offer.id === selectedOffer.id
              ? currentCustomIcon 
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]); 

  return <section className={mapType} ref={mapRef}></section>;
}
