import React from "react";
import "./MainContent.css";

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="main-content-header">

                <h1>Tasks</h1>

            </div>
            <div className="main-content-body"></div>
                <div className="task">
                    <h2>Task 1</h2>
                    <p>Task Description</p>
                </div>
                <div className="task">
                    <h2>Task 2</h2>
                    <p>Task Description</p>
                </div>
                <div className="task">
                    <h2>Task 3</h2>
                    <p>Task Description</p>
                </div>
            
        </div>
        
        
    );
};

export default MainContent;