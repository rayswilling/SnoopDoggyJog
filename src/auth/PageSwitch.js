import React, { Component } from 'react';

import '../App.css';

const PageSwitcher = () => {
  return (
    <div className='PageSwitcher'>
      <a href='#' className='PageSwitcher__Item'>
        Sign In
      </a>
      <a href='#' className='PageSwitcher__Item PageSwitcher__Item--Active'>
        Sign Up
      </a>
    </div>
  );
};

const PageSwitcherTitle = () => {
  return (
    <div className='FormTitle'>
      <a href='#' className='FormTitle__Link'>
        Sign In
      </a>
      or
      <a href='#' className='FormTitle__Link FormTitle__Link--Active'>
        Sign Up
      </a>
    </div>
  );
};

export { PageSwitcher, PageSwitcherTitle };
