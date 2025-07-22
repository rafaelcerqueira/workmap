import React, { useState } from "react";
import { MainContentWrapper, TitleContainer, TaskListWrapper, TaskItem } from './MainContent.styles';
import AddTaskForm from "../TaskList/AddTaskForm";

const MainContent = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Cadastrar currículo", satus: "pendete"},
        { id: 2, text: "Atualizar currículo", satus: "pendete"},
        { id: 3, text: "Preparar para vaga", satus: "pendete"},
    ]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const toggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? {
                ...task,
                status: task.status === "pendente" ? "concluída" : "pendente"
            } : task
        ));
    };

    return (

        <MainContentWrapper>
            <TitleContainer>Título do aplicativvo</TitleContainer>
            <AddTaskForm onAddTask={handleAddTask} />
            <TaskListWrapper>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        status={task.status}
                        onClick={() => toggleTaskStatus(task.id)}
                    >
                        <input 
                            type="checkbox"
                            checked={task.satus === "concluída"}
                            readOnly
                            className="mr-2"
                        />
                        {task.text}
                    </TaskItem>
                ))}
            </TaskListWrapper>
        </MainContentWrapper>
    );

};

export default MainContent;