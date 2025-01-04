import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { cardArray } from './available-place-cards';
import { Provider } from 'react-redux';
import { store } from './redux-store';
import { useAppDispatch } from './hooks/storeHooks';
import { checkAuth, fetchOffers } from './redux-store/api-actions';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());
store.dispatch(checkAuth());

root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
     </Provider>
  </React.StrictMode>
);
