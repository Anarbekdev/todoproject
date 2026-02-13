import { useState } from "react";
import { TodoZustand } from "../zustand/Storezustand";
import '../styles/TodoForm.scss'

export const TodoFormZus = () => {
  const [value, setValue] = useState("");
  const { addTask } = TodoZustand();  

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (event) => {
    if (!value.trim()) return;
    event.preventDefault();
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
    <input 
      type="text" 
      onChange={handleChange} 
      value={value} 
      placeholder="Что нужно сделать?"
      className="todo-form__input"
    />
    <button type="submit" className="todo-form__button">
      Добавить
    </button>
  </form>
  );
};
