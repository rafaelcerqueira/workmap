import React, { useEffect, useState } from "react";
import { MainContentWrapper, TitleContainer, TaskListWrapper, TaskItem } from './MainContent.styles';
import AddTaskForm from "../TaskList/AddTaskForm";

const MainContent = () => {
    const [tasks, setTasks] = useState(() => {
        try {
            const savedTasks = localStorage.getItem('tasks');
            return savedTasks ? JSON.parse(savedTasks) : [
                { id: 1, text: "Cadastrar currículo no LinkedIn", status: "pendente"},
                { id: 2, text: "Preparar para entrevista técnica", status: "pendente"},
                { id: 3, text: "Enviar CV para empresa X", status: "concluída"}
            ];
        } catch (e) {
            console.error("Erro ao carregar tarefas:", e);
            return [];
        }
    });
    
    const [filter, setFilter] = useState('todas');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const getFilteredTasks = () => {
        switch(filter) {
            case 'pendente':
                return tasks.filter(task => task.status === 'pendente');
            case 'concluias':
                return tasks.filter(task => tasks.status === 'concluída');
            case 'todas':
            default:
                return tasks;
        }
    };

    const getTaskCounts = () => {
        return {
            todas: tasks.length,
            pendentes: tasks.filter(task => task.status === 'pendente').length,
            concluidas: tasks.filter(task => task.status === 'concluída').length
        };
    };
 
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

    const filteredTasks = getFilteredTasks();
    const taskCounts = getTaskCounts();

    return (
        <MainContentWrapper>
            <TitleContainer>Planejamento de Vagas</TitleContainer>

            {/*Ainda será implementado o controle de filtros */}

            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <p>Filtros serão aqui no passo 2</p>
                <small>
                    Tota: {taskCounts.todas} |
                    Pendentes: {taskCounts.pendentes} |
                    Concluídas: {taskCounts.concluidas}
                </small>
            </div>

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

                {/* Não há tarefas */}
                {filteredTasks.length === 0 && (
                    <p style={{ textAlign: 'center', color: '#ede2e2ff', fontStyle: 'italic' }}>
                        {filter === 'todas' && 'Nenhuma tarefa cadastrada. Adicione a primeira acima!'}
                        {filter === 'pentendes' && 'Todas as tarefas estão concluídas!'}
                        {filter === 'concluídas' && 'Nenhuma tarefa concluída ainda.'}
                    </p>
                )}
            </TaskListWrapper>
        </MainContentWrapper>

    );
};

export default MainContent;