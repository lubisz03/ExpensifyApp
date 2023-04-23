import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../store/configureStore';
import expenses from '../fixtures/expenses';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Expense List Item', () => {
  const store = configureStore();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ExpenseListItem {...expenses[0]} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
