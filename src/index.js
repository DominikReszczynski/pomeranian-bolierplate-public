import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './App/Store';
import './index.css';
import { App } from './App';
import { worker } from './App/Mocks/setupWorker';

// if (process.env.NODE_ENV === 'development') {
worker.start({});
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
