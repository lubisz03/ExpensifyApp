import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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

  it('should setup add expense action object with default data', () => {
    const action = addExpense({});
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
      },
    });
  });

  it('should setup add expense action object with provided data', () => {
    const expenseData = {
      description: 'Water Bill',
      note: 'August',
      amount: 100,
      createdAt: 1000000,
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String),
      },
    });
  });
});
