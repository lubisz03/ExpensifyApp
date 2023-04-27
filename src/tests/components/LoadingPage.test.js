import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import LoadingPage from '../../components/LoadingPage';

describe('Loading Page', () => {
  it('should correctly render', () => {
    render(<LoadingPage />);
    expect(screen).toMatchSnapshot();
  });
});
