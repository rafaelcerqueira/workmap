import React from "react";
import { TaksListWrapper, TaskItem } from './TaskList.styles';

const TaskList = ({ tasks }) => {
    return (
        <TaksListWrapper>
            {tasks.map((task, index) => (
                <TaskItem key={index}>{task}</TaskItem>
            ))}
        </TaksListWrapper>
    );
};

export default TaskList;