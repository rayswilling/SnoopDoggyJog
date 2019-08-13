import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';

const PageSwitcher = () => {
  return (
    <div className='PageSwitcher'>
      <NavLink
        to='/sign-in'
        className='PageSwitcher__Item'
        activeClassName='PageSwitcher__Item--Active'
      >
        Sign In
      </NavLink>
      <NavLink
        to='/sign-up'
        className='PageSwitcher__Item'
        activeClassName='PageSwitcher__Item--Active'
      >
        Sign Up
      </NavLink>
    </div>
  );
};

const PageSwitcherTitle = () => {
  return (
    <div className='FormTitle'>
      <NavLink
        to='/sign-in'
        className='FormTitle__Link'
        activeClassName='FormTitle__Link--Active'
      >
        Sign In
      </NavLink>
      or
      <NavLink
        to='/sign-up'
        className='FormTitle__Link '
        activeClassName='FormTitle__Link--Active'
      >
        Sign Up
      </NavLink>
    </div>
  );
};

export { PageSwitcher, PageSwitcherTitle };
