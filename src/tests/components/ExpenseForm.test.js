import React from 'react';
import ExpenseForm from '../../components/AddExpensePage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../store/configureStore';
import { fireEvent, render, screen, userEvent } from '@testing-library/react';
import expenses from '../fixtures/expenses';

describe('Expense Form', () => {
  const store = configureStore();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ExpenseForm />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });

  it('renders with valid data', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ExpenseForm expense={expenses[0]} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
