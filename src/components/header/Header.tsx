import './style.scss';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import React from 'react';

export default class Header extends Component {

  render(){
    return (
      <div className="main-header">
        <h1 className="header-title">TODO</h1>
        <FontAwesomeIcon className="header-menu-icon" icon={faMoon} />
        {/* <FontAwesomeIcon className="header-menu-icon" icon={faSun} /> */}
      </div>
    )
  }
}