import './style.scss';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

import TasksData from '../../data/TasksData';
import TaskModel from '../../models/task-data.model';


interface AppState {
  showForm: boolean
  taskList: TaskModel[];
}

interface AppProps {
  taskData: TasksData
}

export default class TodoList extends Component<AppProps, AppState> {

  taskList = [];

  componentDidMount(){
    this.props.taskData.subscribe(this.createTaskList.bind(this));
  }

  componentWillUnmount(){
    this.props.taskData.unsubscribe(this.createTaskList.bind(this));
  }

  private createTaskList(){
    this.setState({taskList: this.props.taskData.taskList});
  }

  render(){
    return (
      <div className="todo-card-wrapper">
        {this.props.taskData.taskList.map((taskObject: TaskModel , index: any) => {
          return (
            <div draggable key={taskObject.id}>
              <div className={`todo-item-wrapper ${taskObject.isFinished === true ? "is-checked" : ""}`}>
                <input 
                  onClick={this.props.taskData.checkTask.bind(this.props.taskData, index)}
                  id={taskObject.id}
                  className="todo-list-checkbox" 
                  type="checkbox"/>
                <label htmlFor={taskObject.id} className="todo-item-content">
                  <span className="todo-list-label">{taskObject.task}</span>
                </label>
                <FontAwesomeIcon onClick={this.props.taskData.deleteTask.bind(this.props.taskData, taskObject.id)} className="remove-icon" icon={faTimes} />
              </div>
              <hr className="todo-list-divider"/>
            </div>
          )
        })}
        <div className="todo-card-footer">
          <p>{this.props.taskData.activeTasks.length} items left</p>
          <p onClick={this.props.taskData.clearCompletedTasks.bind(this.props.taskData)} >Clear completed</p>
        </div>
      </div>
    )
  }

}