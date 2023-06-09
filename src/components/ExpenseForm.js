import React from 'react';
import moment from 'moment';
import { DayPicker } from 'react-day-picker';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onCalendarFocusedChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      const error = 'Please provide description and amount.';
      this.setState(() => ({ error }));
    } else {
      const error = '';
      this.setState(() => ({ error }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div data-testid='expense-form-test'>
        {this.state.error && <p className='form__error'>{this.state.error}</p>}
        <form
          onSubmit={this.onSubmit}
          data-testid='expense-form'
          className='form'>
          <input
            type='text'
            placeholder='Description'
            className='text-input'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type='text'
            className='text-input'
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <DayPicker
            mode='single'
            selected={this.state.createdAt}
            onSelect={this.onDateChange}
          />
          <textarea
            placeholder='Add a note for your expense (optional)'
            className='textarea'
            value={this.state.note}
            onChange={this.onNoteChange}></textarea>
          <div>
            <button data-testid='expense-form-btn' className='button'>
              Save Expense
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
