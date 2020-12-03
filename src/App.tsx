import './assets/App.scss';
import './assets/index.css';

import React, { Component } from 'react';

import Header from './components/header';
import TaskCard from './components/task-card';


class App extends Component {
  
  render(){
    return (
      <div className="wrapper">
        <Header />
        <section className="content">
          <TaskCard />
        </section>
      </div>
    )
  }
}
export default App;
