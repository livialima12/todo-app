import './style.scss';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

interface AppState {
  taskList: string[]
}

interface AppProps {
  taskList: string[]
}


export default class TaskList extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      taskList: this.props.taskList
    }
  }

  deleteTask(this: any, index: any){
    let taskList = this.props.taskList
    taskList.splice(index,1)
    this.setState({
      taskList
    })
  }

  render(){
    return (
      <form className="task-list">
        {this.state.taskList.map((task, index) => {
          return (
            <div key={index} className="task-list-content">
              <input className="task-list-checkbox" type="checkbox"/>
                <label className="task-list-label">{task}</label>
                <FontAwesomeIcon onClick={this.deleteTask.bind(this, index)} className="trash-icon" icon={faTrash} />
            </div>
          )
        })}
      </form>
    )
  }
}