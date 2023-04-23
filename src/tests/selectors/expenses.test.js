import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';
import filtersDefaultState from '../fixtures/filtersDefaultState';
import moment from 'moment';

describe('Expenses Selector', () => {
  it('should filter by text value', () => {
    const filters = {
      ...filtersDefaultState,
      text: 'Gu',
    };
    const state = selectExpenses(expenses, filters);
    expect(state).toEqual([expenses[0]]);
  });

  it('should filter by startDate', () => {
    const filters = {
      ...filtersDefaultState,
      startDate: moment(0),
    };
    const state = selectExpenses(expenses, filters);
    expect(state).toEqual([expenses[2], expenses[0]]);
  });

  it('should filter by endDate', () => {
    const filters = {
      ...filtersDefaultState,
      endDate: moment(0),
    };
    const state = selectExpenses(expenses, filters);
    expect(state).toEqual([expenses[0], expenses[1]]);
  });

  it('should filter by date', () => {
    const filters = {
      ...filtersDefaultState,
      sortBy: 'date',
    };
    const state = selectExpenses(expenses, filters);
    expect(state).toEqual([expenses[2], expenses[0], expenses[1]]);
  });

  it('should filter by amount', () => {
    const filters = {
      ...filtersDefaultState,
      sortBy: 'amount',
    };
    const state = selectExpenses(expenses, filters);
    expect(state).toEqual([expenses[1], expenses[2], expenses[0]]);
  });
});
