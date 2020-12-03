import './style.scss';

import { Component } from 'react';
import React from 'react';

interface AppState {}

interface AppProps {
  taskList: string[]
}


export default class TaskList extends Component<AppProps, AppState> {
  constructor(props: AppProps){
    super(props);
    console.log(props)

  }
  render(){
    return (
      <form className="task-list">
        {this.props.taskList.map((task, index) => {
          return (
            <div key={index}>
              <input type="checkbox"/>
              <label className="task-list-label">{task}</label>          
            </div>
          )
        })}
      </form>
    )
  }
}