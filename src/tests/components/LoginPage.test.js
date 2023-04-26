import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../components/LoginPage';

describe('Login Page', () => {
  it('should correctly render LoginPage', () => {
    render(<LoginPage />);
    expect(screen).toMatchSnapshot();
  });
});
