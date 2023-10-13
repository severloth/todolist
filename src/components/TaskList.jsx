import React, { Component } from 'react';
import '../css/TaskList.css';

class TaskList extends Component {
  state = {
    editingIndex: -1,
    editedText: '',
  };

  handleEditClick = (index, text) => {
    this.setState({
      editingIndex: index,
      editedText: text,
    });
  };

  handleSaveClick = (index) => {
    this.props.onEdit(index, this.state.editedText);
    this.setState({
      editingIndex: -1,
      editedText: '',
    });
  };

  render() {
    const { tasks, onDelete } = this.props;

    return (
      <ul className="task-grid">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {this.state.editingIndex === index ? (
              <>
                <input
                  className='input'
                  type="text"
                  value={this.state.editedText}
                  onChange={(e) => this.setState({ editedText: e.target.value })}
                />
                <button className='saveButton' onClick={() => this.handleSaveClick(index)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'lightgray' : 'white',
                  }}
                >
                  {task.text}
                </span>
                
                <button class="complete" onClick={() => this.props.onToggleComplete(index)}>
                  {task.completed ? 'Marcar como Incompleta' : 'Marcar como Completa'}
                </button>
                <button class="edit" onClick={() => this.handleEditClick(index, task.text)}>Editar</button>
                <button class="delete" onClick={() => onDelete(index)}>Borrar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList;