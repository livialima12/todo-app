import './style.scss';

import { Component } from 'react';

import TasksData from '../../data/TasksData';

interface AppState {}

interface AppProps {
  taskData: TasksData
}

export default class Form extends Component<AppProps, AppState> {

  createTask(event: any){
    this.props.taskData.task = event.target.value;
  }
    
  render(){
    return (
      <form className="form-insert" onSubmit={this.props.taskData.createTask.bind(this.props.taskData)}>
        <input className="input" type="text" id="input-task" placeholder="Create a new todo" onChange={this.createTask.bind(this)}/>
      </form>
    )
  }
}
