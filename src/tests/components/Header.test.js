import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

describe('Header', () => {
  it('renders correctly', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    expect(screen).toMatchSnapshot();
  });

  it('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    render(<Header dispatch={startLogout} />);
    fireEvent.click(screen.getByTestId('header-btn'));
    expect(startLogout).toHaveBeenCalled();
  });
});
