import React from "react";
import { MainContentWrapper, TitleContainer, TaskListWrapper, TaskItem } from './MainContent.styles';

const MainContent = ({ tasks }) => {
    return (
        <MainContentWrapper>
           <TitleContainer>Titulo do aplicativo</TitleContainer>
            <TaskListWrapper>
                {tasks.map((task, index) => (
                    <TaskItem key={index}>{task}</TaskItem>
                ))}
            </TaskListWrapper>
        </MainContentWrapper>
    );
};

export default MainContent;