import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) =>
  props.expensesCount != 0 && (
    <div className='page-header'>
      <div className='content-container'>
        <h1 data-testid='expense-summary-text' className='page-header__title'>
          {`Viewing ${props.expenses.length} ${
            props.expenses.length > 1 ? 'expenses' : 'expense'
          } totaling ${numeral(
            selectExpensesTotal(props.expenses) / 100
          ).format('$0,0.00')}`}
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
