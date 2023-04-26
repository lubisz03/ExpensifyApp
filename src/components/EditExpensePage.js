import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

export const EditExpensePage = (props) => {
  const navigate = useNavigate();
  const x = useParams().id;
  return (
    <div>
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'>Edit Expense</h1>
        </div>
      </div>
      <div className='content-container'>
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(x, expense));
            navigate('/');
          }}
        />
        <button
          className='button button--secondary'
          onClick={(data) => {
            props.dispatch(startRemoveExpense({ id: x }));
            navigate('/');
          }}>
          Remove
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const params = { id: window.location.pathname.split('/')[2] };
  return {
    expense: state.expenses.find((expense) => {
      return expense.id == params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditExpensePage);
