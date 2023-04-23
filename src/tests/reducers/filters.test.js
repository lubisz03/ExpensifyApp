import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import filtersReducer from '../../reducers/filters';
import filtersDefaultState from '../fixtures/filtersDefaultState';
import moment from 'moment';

describe('Filters Reducer', () => {
  it('should setup default/initial filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(filtersDefaultState);
  });

  it('should set sortBy to amount', () => {
    const action = {
      type: 'SORT_BY_AMOUNT',
    };
    const state = filtersReducer(filtersDefaultState, action);
    expect(state.sortBy).toBe('amount');
  });

  it('should set sortBy to date', () => {
    const action = {
      type: 'SORT_BY_DATE',
    };
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe('date');
  });

  it('should set text filter', () => {
    const action = {
      type: 'SET_TEXT_FILTER',
      text: 'water',
    };
    const state = filtersReducer(filtersDefaultState, action);
    expect(state.text).toBe('water');
  });

  it('should set startDate filter', () => {
    const action = {
      type: 'SET_START_DATE',
      startDate: moment().startOf('month'),
    };
    const state = filtersReducer(filtersDefaultState, action);
    expect(state.startDate).toEqual(moment().startOf('month'));
  });

  it('should set endDate filter', () => {
    const action = {
      type: 'SET_END_DATE',
      endDate: moment().endOf('month'),
    };
    const state = filtersReducer(filtersDefaultState, action);
    expect(state.endDate).toEqual(moment().endOf('month'));
  });
});
