import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import 'react-day-picker/dist/style.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<p>Loading...</p>);

store.dispatch(startSetExpenses()).then(() => {
  root.render(jsx);
});
