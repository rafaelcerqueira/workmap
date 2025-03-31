import React from "react";
import { MainContentWrapper, TaskListWrapper, TaskItem } from './MainContent.styles';
import TaskList from "../TaskList/TaskList";

const MainContent = ({ tasks }) => {
    return (
        <MainContentWrapper>
            <h1>Tarefas</h1>
            <TaskListWrapper>
                {tasks.map((task, index) => (
                    <TaskItem key={index}>{task}</TaskItem>
                ))}
            </TaskListWrapper>
        </MainContentWrapper>
    );
};

export default MainContent;