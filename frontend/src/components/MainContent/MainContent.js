import React, { useEffect, useState } from "react";
import { MainContentWrapper, TitleContainer, TaskListWrapper, TaskItem } from './MainContent.styles';
import AddTaskForm from "../TaskList/AddTaskForm";

const MainContent = () => {
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem('tasks');
            return savedTasks ? JSON.parse(savedTasks) : [];
        } catch (e) {
            console.error("Erro ao carregar tarefas:", e);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

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
            <TitleContainer>Planejamento de Vagas</TitleContainer>
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
                            checked={task.status === "concluída"}
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