import React, { useState } from 'react';
import MainContent from './components/mainComponent/MainContent';
import Sidebar from './components/sidebarComponent/Sidebar';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const user = {
    name: 'Gir',
    profilePic: 'https://i.ytimg.com/vi/SCh0BXdVtmE/hqdefault.jpg"'
    
  };

  return (
    <div className='App'>
      <Sidebar user={user} addTask={addTask} />
      <MainContent>
        <h1>Tasks</h1>
        

      </MainContent>
    </div>
  );
};

export default App;
