import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import { v4 as uuid } from 'uuid';

describe('Expense Reducer', () => {
  it('should set default/initial state', () => {
    const state = expenseReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
  });

  it('should remove expense by id', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: 2,
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
  });

  it('should not remove expense if not found', () => {
    const action = {
      type: 'REMOVE_EXPENSE',
      id: -1,
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
  });

  it('should add an expense', () => {
    const id = uuid();
    const createdAt = moment();
    const action = {
      type: 'ADD_EXPENSE',
      expense: {
        id: id,
        createdAt: createdAt,
        amount: 1000,
        note: '',
        description: 'Rent',
      },
    };
    const state = expenseReducer(undefined, action);
    expect(state).toEqual([
      {
        id: id,
        createdAt: createdAt,
        amount: 1000,
        note: '',
        description: 'Rent',
      },
    ]);
  });

  it('should edit an expense', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: 2,
      updates: {
        description: 'Water bill',
        note: '',
        amount: 10000,
      },
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
      expenses[0],
      {
        ...expenses[1],
        description: 'Water bill',
        note: '',
        amount: 10000,
      },
      expenses[2],
    ]);
  });

  it('should not edit expense if not found', () => {
    const action = {
      type: 'EDIT_EXPENSE',
      id: 5,
      updates: {
        description: 'Phone bill',
        amount: 500,
      },
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
  });
});
