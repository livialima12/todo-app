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
  categories: string[];
  taskData: TasksData
}

  /**
 * Ao declarar a classe e extender o componente, podemos passar os tipos de interface para props e state
 */
export default class TodoList extends Component<AppProps, AppState> {

  taskList = [];
  
    /**
   * É necessário declarar o this.state aqui por que, se não o fizer, ao fazer a primeira verificação de exibição,
   * não haverá um showForm. Uma vez que o showForm tem como valor false isso poderia ser resolvido com a
   * implantação do optional chaining através da instalação do Babel
   * {@link https://dev.to/aumayeung/how-to-use-the-optional-chaining-operator-in-your-react-app-right-now-1ocj}
   */
  constructor(
    props: any) {
    super(props);

    this.state = { 
      showForm: false, 
      taskList: this.taskList
    } 
  }

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
            <div key={taskObject.id}>
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