import React from "react";
import { SideNavWrapper, Profile, AppName, MenuItem, } from './SideNav.styles';

const SideNav = ({ isOpen, isMobile, user }) => {
    return (
        <SideNavWrapper isOpen={isOpen}>
            {!isMobile && (
                <Profile>
                    <img src={user.profilePic} alt="Profile" />
                    <h2>{user.name}</h2>
                </Profile>

            )}
            {isMobile && <AppName>Workmap</AppName>}
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