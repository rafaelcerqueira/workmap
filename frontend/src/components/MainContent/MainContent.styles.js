import styled from 'styled-components';

export const MainContentWrapper = styled.main`
    flex-grow: 1;
    display: flex;
    flex-diection: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px
    bacground-color: #ffffff;
    overflow-y: auto;

    @media (min-width: 768px) {
        align-items: flex-start;
        padding: 40px;
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
    gap: 10px;
`;

export const TaskItem = styled.li`
    padding: 15px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
`;