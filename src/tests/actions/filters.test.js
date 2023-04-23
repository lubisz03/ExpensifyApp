import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';
import moment from 'moment';

describe('Filters actions tests', () => {
  it('should setTextFilter action object with default data', () => {
    const action = setTextFilter();
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: '',
    });
  });

  it('should setTextFilter action object with provided data', () => {
    const action = setTextFilter('Test');
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: 'Test',
    });
  });

  it('should set sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
      type: 'SORT_BY_DATE',
    });
  });

  it('should set sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
      type: 'SORT_BY_AMOUNT',
    });
  });

  it('should set setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0),
    });
  });

  it('should set setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0),
    });
  });
});
