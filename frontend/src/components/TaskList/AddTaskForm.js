import React, { useState } from "react";
import styled from "styled-components";

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
            <input 
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Adcionar nova tarefa..."
                className="border p-2 rounded-l w-full"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
            >
                Adicionar
            </button>
        </FormWrapper>
    )
};

const FormWrapper = styled.form`
    display: felx;
    margin-bottom: 20px;
    width: 100%;
`;

export default AddTaskForm;