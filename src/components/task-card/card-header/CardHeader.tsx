import './style.scss';

import { Component } from 'react';

export default class CardHeader extends Component {

  render(){
    return (
      <div className="card-header">
        <h2 className="card-header-title">Category title</h2>
      </div>
    )
  }

}