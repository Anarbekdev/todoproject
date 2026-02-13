import React from "react";
import { TodoFormZus } from "./TodoFormZus";
import { TodoSearch } from "./TodoSearch"; 
import { TodoZustand } from "../zustand/Storezustand";
import '../styles/navbar.scss'

export const Navbar = () => {
    const totalActive = TodoZustand(state => state.todos.filter(t => !t.completed).length);
  return (
   <nav className="navbar">
        <div className="navbar-logo">
            <h1>
                Todo App
            </h1>
        </div>
        <div className="navbar-tools">
            <div className="tool-item">
                {totalActive == 0 ? '' : <span>Не выполненные задачи: {totalActive}</span>}
            
            </div>
            <div className="tool-item">
                <TodoSearch/>
            </div>
            <div className="item-tool">
                <TodoFormZus/>
            </div>
        </div>
   </nav>
  );
};
