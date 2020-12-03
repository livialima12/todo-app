import './style.scss';

import { Component } from 'react';

import CardHeader from './card-header/CardHeader';
import Form from './form/Form';
import TaskList from './task-list/TaskList';

interface AppState {
  showForm: boolean
  taskList: string[];
}

interface AppProps {
}

  /**
 * Ao declarar a classe e extender o componente, podemos passar os tipos de interface para props e state
 */
export default class TaskCard extends Component<AppProps, AppState> {

  taskList = ["Teste 1", "Teste 2"];
  
    /**
   * É necessário declarar o this.state aqui por que, se não o fizer, ao fazer a primeira verificação de exibição,
   * não haverá um showForm. Uma vez que o showForm tem como valor false isso poderia ser resolvido com a
   * implantação do optional chaining através da instalação do Babel
   * {@link https://dev.to/aumayeung/how-to-use-the-optional-chaining-operator-in-your-react-app-right-now-1ocj}
   */
  constructor(props: any) {
    super(props);
    this.state = { 
      showForm: false, 
      taskList: this.taskList
    } //Precisa estar aqui por que se não, ao fazer a primeira verificação não tem o showForm. Poderia ser resolvido com ?. através da instalação do Babel
  }

    /**
   * Treat onClick event.
   * Ao chamar esse método no JSX passamos o bind do this. Isso deve ser feito por que, uma vez qe o this é
   * dinâmico, ao chamar o evento onClick quem chama o this é o evento, e não a classe. Impedindo que o setState
   * seja encontrado.
   */
  private onButtonClick(): void {
    this.setState({
      showForm: true,
    });
  }

  createTask(task: any){
    this.state.taskList.push(task)
    this.setState(this.state)
  }

  render(){
    return (
      <div className="task-card-wrapper">
        <CardHeader></CardHeader>
        <TaskList taskList={this.state.taskList}></TaskList>
        {this.state.showForm
          ? <Form createTask={this.createTask.bind(this)}/>
          : null
        }
        {
          !this.state.showForm
          ? <button onClick={this.onButtonClick.bind(this)} className="task-card-add-button">+ New Task</button>
          : null
        }
      </div>
    )
  }

}