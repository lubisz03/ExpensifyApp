import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ExpenseListFilters from '../../components/ExpenseListFilters';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

describe('Expense List Filter', () => {
  const store = configureStore();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <ExpenseListFilters />
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
