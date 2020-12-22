import TaskModel from '../models/task-data.model';

export default class TasksData {

  public taskList: TaskModel[];
  public task: string = "";
  public activeTasks: TaskModel[] = [];
  public inactiveTasks: TaskModel[] = [];
  private subscribers: any[] = [];
  


  constructor(){
    this.taskList = [
      {
        task: "Jog around the park",
        isFinished: false,
        id: "testeId"
      }, 
      {
        task:"10 minutes medidation",
        isFinished: false,
        id: "testeId2"
    }];
    this.filterTasks();
  }

  filterTasks(){
    this.activeTasks = this.taskList.filter(task => task.isFinished === false);
    this.inactiveTasks = this.taskList.filter(task => task.isFinished === true);
  }

  createTask(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const taskObject: TaskModel = {
      task: this.task,
      isFinished: false,
      id: this.task + Math.round(Math.random() * 10)
    }
    this.taskList.push(taskObject);
    this.filterTasks();
    this.notify();
  }

  deleteTask(this: any, taskId: any){
    this.taskList = this.taskList.filter((task: any) => task.id !== taskId);
    this.filterTasks();
    this.notify();
  }

  checkTask(index: any, e: any){
    this.taskList[index].isFinished = e.target.checked;
    this.filterTasks();
    this.notify();
  }

  clearCompletedTasks(){
    this.filterTasks();
    this.taskList = this.activeTasks
    this.notify();
  }

  subscribe(func: any){
    this.subscribers.push(func);
  }

  unsubscribe(func: any) {
    this.subscribers = this.subscribers.filter(f => f !== func)
  }

  notify(){
    this.subscribers.forEach(func => {func(this.taskList)})
  }
}