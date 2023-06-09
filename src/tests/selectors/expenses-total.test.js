import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

describe('Expenses Total Selector', () => {
  it('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
  });

  it('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
  });

  it('should correctly add up mulitple expenses', () => {
    const res = selectExpensesTotal([...expenses]);
    expect(res).toBe(114195);
  });
});
