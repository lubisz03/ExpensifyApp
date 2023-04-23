import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

export const EditExpensePage = (props) => {
  const navigate = useNavigate();
  const x = useParams().id;
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log('updated', expense);
          console.log(x);
          props.dispatch(editExpense(x, expense));
          navigate('/');
        }}
      />
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
