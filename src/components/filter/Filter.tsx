import './style.scss';

import { Component } from 'react';

import TasksData from '../../data/TasksData';

export default class Filter extends Component<{taskData: TasksData}, {activeCategory: string}> {

  constructor(props: {taskData: TasksData}){
    super(props)
    this.state = {
      activeCategory: "all"
    }
  }

  treatFilter(identifier: string){
    this.setState({activeCategory: identifier});
    this.props.taskData.classifyTasks(identifier);
  }

  render(){
    return (
      <>
        <ul className="filter-card">
          <li onClick={this.treatFilter.bind(this, 'all')}>
            <span className={`${this.state.activeCategory === "all" ? "active" : ""}`}>All</span>
          </li>
          <li onClick={this.treatFilter.bind(this, 'active')} className={`${this.state.activeCategory === 'active' ? "active" : ""}`}>Active</li>
          <li onClick={this.treatFilter.bind(this, 'inactive')} className={`${this.state.activeCategory === 'inactive' ? "active" : ""}`}>Completed</li>
        </ul>
      </>
    )
  }
}