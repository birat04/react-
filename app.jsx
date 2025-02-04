// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   // State to hold the list of todos and the current input value.
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState('');

//   // Function to add a new todo.
//   const addTodo = () => {
//     if (!input.trim()) return; // Prevent adding empty todos
//     const newTodo = {
//       id: Date.now(), // Unique identifier
//       text: input,
//       completed: false,
//     };
//     setTodos([...todos, newTodo]);
//     setInput(''); // Clear input after adding
//   };

//   // Function to toggle the completion status of a todo.
//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Function to delete a todo.
//   const deleteTodo = (id) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       {/* Input and button for adding todos */}
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a new todo..."
//       />
//       <button onClick={addTodo}>Add Todo</button>

//       {/* List of todos */}
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//             {todo.text}
//             {/* Toggle button */}
//             <button onClick={() => toggleTodo(todo.id)}>
//               {todo.completed ? 'Undo' : 'Complete'}
//             </button>
//             {/* Delete button */}
//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
