import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')} -{' '}
      {moment(createdAt).format('Do MMMM YYYY')}
    </p>
    <button
      onClick={(e) => {
        dispatch(removeExpense({ id }));
      }}>
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
