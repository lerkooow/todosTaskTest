import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TTodoItem } from "../constants/todoTypes";

interface TodosState {
  todos: TTodoItem[];
  nextId: number;
}

export const initialState: TodosState = {
  todos: [],
  nextId: 1,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTask: TTodoItem = {
        id: state.nextId,
        task: action.payload,
        checked: false,
      };
      state.todos.push(newTask);
      state.nextId += 1;
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.checked);
    },
    resetTodos(state) {
      state.todos = [];
      state.nextId = 1;
    },
  },
});

export const selectAllTodo = (state: { todos: TodosState }) => state.todos.todos;

export default todosSlice.reducer;
export const { addTodo, toggleTodo, deleteTask, clearCompleted, resetTodos } = todosSlice.actions;
