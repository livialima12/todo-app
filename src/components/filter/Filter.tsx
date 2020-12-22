import './style.scss';

import { Component } from 'react';

import TasksData from '../../data/TasksData';

interface AppState {
}

interface AppProps {
  taskData: TasksData
}


export default class Filter extends Component<AppProps, AppState> {

  treatFilter(e: string){


    console.log("e", this.props.taskData.activeTasks)

  }

  render(){
    return (
      <>
        <ul className="filter-card">
          <li onClick={this.treatFilter.bind(this, '1')}>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
      </>
    )
  }

}