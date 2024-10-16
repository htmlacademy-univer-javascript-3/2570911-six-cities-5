import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { cardArray } from './available-place-cards';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
     <App availableCards = {cardArray} />
  </React.StrictMode>
);
