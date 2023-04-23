import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) =>
  props.expensesCount != 0 && (
    <div>
      <h1 data-testid='expense-summary-text'>
        {`Viewing ${props.expensesCount} ${
          props.expensesCount > 1 ? 'expenses' : 'expense'
        } totaling ${numeral(selectExpensesTotal(props.expenses) / 100).format(
          '$0,0.00'
        )}`}
      </h1>
    </div>
  );

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesCount: selectExpenses(state.expenses, state.filters).length,
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
