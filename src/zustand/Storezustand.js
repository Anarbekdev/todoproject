import { create } from "zustand";
import { persist } from "zustand/middleware";

export const TodoZustand = create(
  persist(
    (set, get) => ({
      todos: [],
      filteredTodos: [],
      currentFilter: "all",

      applyFilter: () => {
        const { todos, currentFilter } = get();
        if (currentFilter === "active") {
          set({ filteredTodos: todos.filter((t) => !t.completed) });
        } else if (currentFilter === "completed") {
          set({ filteredTodos: todos.filter((t) => t.completed) });
        } else {
          set({ filteredTodos: todos });
        }
      },

      setFilter: (status) => {
        set({ currentFilter: status });
        get().applyFilter();
      },

      addTask: (userInput) => {
        if (!userInput) return;
        const newTodo = { id: Date.now(), task: userInput, completed: false };
        set((state) => ({ todos: [...state.todos, newTodo] }));
        get().applyFilter();
      },

      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        }));
        get().applyFilter();
      },

      removeTask: (id) => {
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        }));
        get().applyFilter();
      },

      searchTask: (inpValue) =>
        set((state) => ({
          filteredTodos: state.todos.filter((t) =>
            t.task.toLowerCase().includes(inpValue.toLowerCase())
          ),
        })),
      initStore: () => {
        get().applyFilter();
      },
    }),
    {
      name: "todo-app-storage",
    }
  )
);
