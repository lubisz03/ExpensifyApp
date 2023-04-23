import React from 'react';
import ExpenseDashboardPage from '../../components/AddExpensePage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../store/configureStore';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Expense Dashboard Page', () => {
  const store = configureStore();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ExpenseDashboardPage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
