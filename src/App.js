import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import LoadingScreen from './components/LoadingScreen'; // Importa el componente de carga


class App extends Component {
  state = {
    tasks: [],
    newTask: '',
    isLoading: true,
  };

  componentDidMount() {
    // Simula la carga de datos (puedes reemplazar esto con tu lógica de carga real)
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000); // Simula una carga de 2 segundos
  }

  handleAddTask = () => {
    this.setState({
      tasks: [...this.state.tasks, { text: this.state.newTask, completed: false }],
      newTask: '',
    });
  };

  handleToggleComplete = (index) => {
    const tasks = [...this.state.tasks];
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks });
  };

  handleEditTask = (index, newText) => {
    const tasks = [...this.state.tasks];
    tasks[index].text = newText;
    this.setState({ tasks });
  };

  handleDeleteTask = (index) => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? ( // Muestra la pantalla de carga si isLoading es verdadero
          <LoadingScreen />
        ) : (

          
          <div className='main'>
            <div className="logo">
              <img src="/moonit.png" alt="Logo de la aplicación" />
            
            </div>
            <h1>ToDo List</h1>
            <input
              type="text"
              value={this.state.newTask}
              onChange={(e) => this.setState({ newTask: e.target.value })}
            />
            <button className='newButton' onClick={this.handleAddTask}>Add Task</button>
            <TaskList
              tasks={this.state.tasks}
              onToggleComplete={this.handleToggleComplete}
              onEdit={this.handleEditTask}
              onDelete={this.handleDeleteTask}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;