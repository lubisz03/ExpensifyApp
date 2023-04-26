import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  addExpense,
  removeExpense,
  editExpense,
  startAddExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase';

jest.setTimeout(25000);
const createMockStore = configureMockStore([thunk]);

describe('Expense actions tests', () => {
  it('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc',
    });
  });

  it('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note' });
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123abc',
      updates: { note: 'New note' },
    });
  });

  it('should setup add expense action object with provided data', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: expenses[2],
    });
  });

  it('should add expense to database and store', (done) => {
    const store = createMockStore({ auth: { uid } });
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000,
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      db.ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value')
        .than((snapshot) => {
          expect(snapshot.val()).toEqual(expenseData);
        });
    });
    done();
  });

  it('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({ auth: { uid } });
    const expenseDefaults = {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    };

    store.dispatch(startAddExpense({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      db.ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once('value')
        .than((snapshot) => {
          expect(snapshot.val()).toEqual(expenseDefaults);
        });
    });
    done();
  });
});
