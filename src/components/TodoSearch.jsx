import { useState } from "react";
import { TodoZustand } from "../zustand/Storezustand";
export const TodoSearch = () => {

  const [value, setValue] = useState("");
  
  const { searchTask } = TodoZustand()

  const Search = (e) => {
    e.preventDefault();
    searchTask(value)
  };
  return (
    <form action="" onSubmit={Search} className="todo-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-form__input"
        placeholder="Искать"
      />
      <button className="todo-form__button">искать</button>
    </form>
  );
};
