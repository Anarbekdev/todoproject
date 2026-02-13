import { TodoZustand } from "../zustand/Storezustand";
import "../styles/Todo.scss";

export const TodoZus = ({ todo }) => {
  const { removeTask, toggleTodo } = TodoZustand();

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <span
        className={`todo-item__text ${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </span>
      <button className="todo-item__delete" onClick={() => removeTask(todo.id)}>
        Удалить
      </button>
    </div>
  );
};
