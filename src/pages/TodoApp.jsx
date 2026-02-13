import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { TodoZustand } from "../zustand/Storezustand";
import { TodoZus } from "../components/TodoZus";
import '../styles/TodoApp.scss'

export const TodoApp = () => {
  const { filteredTodos, setFilter, currentFilter,initStore } = TodoZustand();

  useEffect(() => {
    initStore()
  },[])
 
  return (
    <div>
      <Navbar />
      <div className="all">
        <ul className="filter-list">
          <li 
            className={currentFilter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            Все
          </li>
          <li 
            className={currentFilter === 'active' ? 'active' : ''} 
            onClick={() => setFilter('active')}
          >
            Активные
          </li>
          <li 
            className={currentFilter === 'completed' ? 'active' : ''} 
            onClick={() => setFilter('completed')}
          >
            Завершенные
          </li>
        </ul>
      </div>
      <div className="Todos">
        {filteredTodos.map((todo) => {
          return <TodoZus todo={todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};
