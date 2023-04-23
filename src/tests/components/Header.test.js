import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Header', () => {
  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen).toMatchSnapshot();
  });
});
