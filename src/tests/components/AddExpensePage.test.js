import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddExpensePage from '../../components/AddExpensePage';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';

describe('Add Expense Page', () => {
  const store = configureStore();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <AddExpensePage />
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
