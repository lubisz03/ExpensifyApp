import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import { DateRange, DayPicker } from 'react-day-picker';
import moment from 'moment';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = (e) => {
    console.log(e);
    this.props.dispatch(setStartDate(moment(e.from)));
    this.props.dispatch(setEndDate(moment(e.to)));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DayPicker
          mode='range'
          selected={{
            from: this.props.filters.startDate._d,
            to: this.props.filters.endDate._d,
          }}
          onSelect={this.onDatesChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
