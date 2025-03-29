import React from "react";
import "./SideNav.css";

const SideNav = ({ user }) => {
    return (
        <div className="sidebar">
            <div className="profile">
                <img src="https://i.ytimg.com/vi/SCh0BXdVtmE/hqdefault.jpg" alt="Profile" className="profile-pic"/>
                <h2>{user.name}</h2>
            </div>
            <nav className="menu">
            <div className="menu-item">
                <a href="/updates">Atualizações</a>
            </div>
            <div className="menu-item">
                <a href="/profile">Prioridades</a>
            </div>
            <div className="menu-item">
                <a href="/settings">Nova Tarefa</a>
            </div>
            <div className="menu-item">
                <a href="/settings">Histórico</a>
            </div>

            </nav>
        </div>

    );
};

export default SideNav;