import React, { useState } from 'react';

function App() {
  // 1. State for the list of tasks (Array of Objects)
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Submit CSG3008 3D Modeling assignment', completed: false },
    { id: 2, text: 'Fix movement bug in Death Shooter project', completed: false },
    { id: 3, text: 'Cook Shahi Paneer for dinner', completed: true }
  ]);
  
  // 2. State for the new task input field
  const [newTask, setNewTask] = useState('');

  // Add Task Function
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    const newTaskObj = {
      id: Date.now(), // Generate a simple unique ID
      text: newTask,
      completed: false
    };
    
    setTasks([...tasks, newTaskObj]); // Spread operator to add new task
    setNewTask(''); // Clear input
  };

  // Toggle Completion Function
  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete Task Function
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '30px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#2c3e50', margin: '0 0 20px 0' }}>Task Manager 📋</h1>
        
        {/* Add Task Form */}
        <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="What needs to be done?"
            style={{ flex: 1, padding: '12px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
          <button type="submit" style={{ padding: '12px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', cursor: 'pointer' }}>
            Add
          </button>
        </form>

        {/* Task List */}
        {tasks.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>All caught up! No tasks left.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {tasks.map((task) => (
              <li key={task.id} style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #eee', backgroundColor: task.completed ? '#f9f9f9' : 'white' }}>
                
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleTask(task.id)}
                  style={{ marginRight: '15px', transform: 'scale(1.5)', cursor: 'pointer' }}
                />
                
                <span style={{ flex: 1, fontSize: '16px', color: task.completed ? '#bdc3c7' : '#333', textDecoration: task.completed ? 'line-through' : 'none' }}>
                  {task.text}
                </span>
                
                <button 
                  onClick={() => deleteTask(task.id)}
                  style={{ padding: '8px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;