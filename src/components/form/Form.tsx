import './style.scss';

import { Component } from 'react';

import TasksData from '../../data/TasksData';

export default class Form extends Component<{taskData: TasksData}, {}> {

  componentDidMount(){
    this.props.taskData.subscribe(this.updateForm.bind(this));
  }

  updateForm(){
    this.setState({});
  }

  createTask(event: any){
    this.props.taskData.task = event.target.value;
  }
    
  render(){
    return (
      <form className="form-insert" onSubmit={this.props.taskData.createTask.bind(this.props.taskData)}>
        <input disabled={this.props.taskData.isFormDisabled} className="input" type="text" id="input-task" placeholder="Create a new todo" onChange={this.createTask.bind(this)}/>
      </form>
    )
  }
}
