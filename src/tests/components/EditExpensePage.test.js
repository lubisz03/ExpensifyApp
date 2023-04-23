import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { BrowserRouter } from 'react-router-dom';

describe('Edit Expense Page', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <EditExpensePage />
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
