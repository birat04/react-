import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); 

 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

 
  const addTodo = () => {
    if (!input.trim()) return; 
    const newTodo = {
      id: Date.now(), 
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput(''); 
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; 
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Input and button for adding todos */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new todo..."
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* Filter Buttons */}
      <div className="filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>

      {/* List of Todos */}
      <ul>
        {filteredTodos.map((todo) => (
          <li 
            key={todo.id} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
