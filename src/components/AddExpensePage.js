import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense, startAddExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

const AddExpensePage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Add Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm
          onSubmit={(expense) => {
            props.dispatch(startAddExpense(expense));
            navigate('/dashboard');
          }}
        />
      </div>
    </div>
  );
};

export default connect()(AddExpensePage);
