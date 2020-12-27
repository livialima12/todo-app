import TaskModel from '../models/task-data.model';

export default class TasksData {

  public taskList: TaskModel[];
  public updatedTaskList: TaskModel[] = [];
  public isFormDisabled: boolean = false;

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
    this.updatedTaskList = this.taskList;
    this.filterTasks();
  }

  updateTaskList(){
    this.updatedTaskList = this.taskList;
  }

  checkTask(index: any, e: any){
    this.taskList[index].isFinished = e.target.checked;
    this.filterTasks();
    this.notify();
  }

  createTask(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const taskObject: TaskModel = {
      task: this.task,
      isFinished: false,
      id: this.task + Math.round(Math.random() * 10)
    }
    this.taskList = [...this.taskList, taskObject];
    this.updateTaskList();
    this.notify();
  }

  deleteTask(this: any, taskId: any){    
    this.taskList = this.updatedTaskList.filter((task: any) => task.id !== taskId);
    this.updateTaskList();
    this.filterTasks();
    this.notify();
  }

  clearCompletedTasks(){
    this.taskList = this.activeTasks;
    this.inactiveTasks = [];
    this.updateTaskList();
    this.notify();
  }

  filterTasks(){
    this.activeTasks = this.updatedTaskList.filter(task => task.isFinished === false);
    this.inactiveTasks = this.updatedTaskList.filter(task => task.isFinished === true);
  }

  classifyTasks(identifier: string){
    this.filterTasks();
    switch (identifier) {
      case "active":
        this.taskList = this.activeTasks;
        this.isFormDisabled = true;
        break;
      case "inactive":
        this.taskList = this.inactiveTasks;
        this.isFormDisabled = true;
        break;
        case "all":
          this.taskList = this.updatedTaskList;
          this.isFormDisabled = false;
          break;
      default:
        this.taskList = this.updatedTaskList;
        this.isFormDisabled = false;
        break;
    }
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