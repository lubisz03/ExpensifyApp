import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddExpensePage from '../../components/AddExpensePage';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../store/configureStore';

describe('Add Expense Page', () => {
  const store = configureStore();
  it('renders correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddExpensePage />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });
});
