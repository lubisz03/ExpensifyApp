import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../../store/configureStore';
import expenses from '../fixtures/expenses';
import { fireEvent, render, screen } from '@testing-library/react';
import numeral from 'numeral';
import selectExpensesTotal from '../../selectors/expenses-total';

describe('Expenses Summary', () => {
  it('renders correctly - data provided', () => {
    render(<ExpensesSummary expenses={expenses} />);
    expect(screen.getByTestId('expense-summary-text').textContent).toEqual(
      `Viewing ${expenses.length} ${
        expenses.length > 1 ? 'expenses' : 'expense'
      } totaling ${numeral(selectExpensesTotal(expenses) / 100).format(
        '$0,0.00'
      )}`
    );
    expect(screen).toMatchSnapshot();
  });
});
