import React from "react";
import { SideNavWrapper, Profile, MenuItem } from './SideNav.styles';

const SideNav = ({ isOpen, user }) => {
    return (
        <SideNavWrapper isOpen={isOpen}>
            <Profile>
                <img src={user.profilePic} alt="Profile"/>
                <h2>{user.name}</h2>
            </Profile>
            <nav>
                <MenuItem href="/updates">Atualizações</MenuItem>
                <MenuItem href="/priority-tasks">Tarefas Prioritárias</MenuItem>
                <MenuItem href="/add-task">Adicionar Tarefa</MenuItem>
                <MenuItem href="/task-history">Histórico de Tarefas</MenuItem>
            </nav>
        </SideNavWrapper>
    );
};

export default SideNav;