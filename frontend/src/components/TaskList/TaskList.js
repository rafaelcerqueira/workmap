import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <AddTaskForm onAddTask={handleAddTask}/>
        </div>
    );
};

export default TaskList;