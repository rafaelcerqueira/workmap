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
  padding: 15px;
  background-color: ${props => props.status === "concluída" ? "#f0fdf4" : "#fff"};
  border-left: 15px solid ${props => props.status === "concluída" ? "#10b981" : "#3b82f6"};
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f8fafc;
  }
`;