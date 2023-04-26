import React from 'react';
import {
  Routes,
  Route,
  Link,
  NavLink,
  Router,
  BrowserRouter,
  useNavigate,
} from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = (props) => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
          exact={true}
        />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Header />
              <ExpenseDashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/create'
          element={
            <PrivateRoute>
              <Header />
              <AddExpensePage />
            </PrivateRoute>
          }
        />
        <Route
          path='/edit/:id'
          element={
            <PrivateRoute>
              <Header />
              <EditExpensePage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default AppRouter;
