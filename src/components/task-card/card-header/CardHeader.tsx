import './style.scss';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

export default class CardHeader extends Component {

  render(){
    return (
      <div className="card-header">
        <FontAwesomeIcon icon={faBars} />
        <h2 className="card-header-title">Category title</h2>
      </div>
    )
  }

}