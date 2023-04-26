import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import 'react-day-picker/dist/style.css';
import { firebase } from './firebase/firebase';
import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';

const store = configureStore();
const history = createBrowserHistory();

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    root.render(jsx);
    hasRendered = true;
    console.log('true');
  }
};

root.render(<p>Loading...</p>);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });
    if (history.location.pathname == '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
