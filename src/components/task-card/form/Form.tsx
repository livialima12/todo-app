import './style.scss';

import { Component } from 'react';

interface AppState {}

interface AppProps {
  createTask: any
}

export default class Form extends Component<AppProps, AppState> {

  task = "";

  taskSubmit(event: any){
    event.preventDefault();
    event.stopPropagation();
    this.props.createTask(this.task)
  }

  createTask(event: any){
    event.stopPropagation();
    this.task = event.target.value;
  }

  render(){
    return (
      <form className="form-insert" onSubmit={this.taskSubmit.bind(this)}>
        <input className="input" onChange={this.createTask.bind(this)} type="text" placeholder="Insert your task"/>
        <button className="submit-button">
          Insert task
        </button>
      </form>
    )
  }
}
