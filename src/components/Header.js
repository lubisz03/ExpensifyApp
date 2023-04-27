import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='content-container'>
        <div className='header__content'>
          <NavLink className='header__title' to='/dashboard'>
            <h1>Expensify</h1>
          </NavLink>
          <button
            className='button button--link'
            onClick={() => {
              props.dispatch(startLogout());
            }}
            data-testid='header-btn'>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default connect()(Header);
