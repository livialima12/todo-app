import './assets/App.scss';
import './assets/index.css';

import React, { Component } from 'react';

import Filter from './components/filter';
import Form from './components/form';
import Header from './components/header';
import TodoList from './components/todo-list';
import TasksData from './data/TasksData';

class App extends Component {
  public taskData = new TasksData();
  public categoriesList = []

  render(){
    return (
      <div className="main-application">
        <Header />
        <section className="content">
          <Form taskData={this.taskData}/>
          <TodoList taskData={this.taskData} />
          <Filter taskData={this.taskData}></Filter>
          <p className="info-text">Drag and drop to reorder list</p>
        </section>
      </div>
    )
  }
}
export default App;
