import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NotFoundPage from '../../components/NotFoundPage';

describe('Not Found Page', () => {
  it('renders correctly', () => {
    render(<NotFoundPage />);
    expect(screen).toMatchSnapshot();
  });
});
