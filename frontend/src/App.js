import React, { useState } from 'react';
import MainContent from './components/mainComponent/MainContent';
import SideNav from './components/sideNavComponent/SideNav';
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
      <SideNav user={user} addTask={addTask} />
      <MainContent>
        <h1>Tasks</h1>
        

      </MainContent>
    </div>
  );
};

export default App;
