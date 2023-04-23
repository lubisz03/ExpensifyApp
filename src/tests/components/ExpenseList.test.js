import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../store/configureStore';
import expenses from '../fixtures/expenses';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Expense List', () => {
  const store = configureStore();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ExpenseList expenses={expenses} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });

  it('should render component with empty message', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ExpenseList expenses={[]} />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
