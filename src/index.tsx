import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { cardArray } from './available-place-cards';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { fullOffers } from './mocks/detailed-offer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <App availableCards={cardArray} offers={offers} />
  </React.StrictMode>
);
