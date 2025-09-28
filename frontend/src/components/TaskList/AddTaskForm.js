import React, { useState } from "react";
import styled from "styled-components";
import { TaskListWrapper } from "../MainContent/MainContent.styles";

const AddTaskForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!taskText.trim()) return;

        onAddTask({
            id: Date.now(),
            text: taskText,
            status: 'pendete',
            links: []
        });
        setTaskText('');
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <InputWrapper>
                <input 
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Adcionar nova tarefa..."
                    className="task-input"
                    
                />
                <button
                    type="submit"
                    className="add-button"
                >
                    <PlusIcon>+</PlusIcon>
                </button>
            </InputWrapper>
        </FormWrapper>
    );
};

const FormWrapper = styled(TaskListWrapper)`
    margin-bottom: 20px;
    padding: 0 0 0 16px;
`;

const InputWrapper = styled.div`
    display: felx;
    gap: 8px;
    width: 100%;

    .task-input {
        flex-grow: 1;
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #f4e3e3ff;
        border-radius: 8px;
        font-size: 14px;
        transition: border 0.2s;
        box-sizing: border-box;

        &:focus {
            outline: none;
            border-color: #4285f4;
        }
    }

    .add-button {
        background: #2e4e83ff;
        color: white;
        border: none;
        border-radius: 8px;
        width: 40px;
        heigh: 40px;
        margin: 4px;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.2s;

        &:hover {
            background: #3367d6;
        }

        &:active {
            transform: scale(0.95);
        }
    }
`;

const PlusIcon = styled.span`
    font-size: 20px;
    line-height: 1;

`;

export default AddTaskForm; 