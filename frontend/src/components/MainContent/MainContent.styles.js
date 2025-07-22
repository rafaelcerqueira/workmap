import styled from 'styled-components';

export const MainContentWrapper = styled.main`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    bacground-color:rgb(255, 255, 255);
    overflow-y: auto;

`;

export const TitleContainer = styled.div`
    width: 100%;
    max-width: 600px;
    margin-bottom: 30px;
    text-align: center;
    h1 {
        font-size: 2.5rem;
        color: #333;
        margin: 0;
    }

`;

export const TaskListWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const TaskItem = styled.li`
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
`;