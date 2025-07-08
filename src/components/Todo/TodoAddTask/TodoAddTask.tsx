import { type KeyboardEvent, useState } from "react";

import { useDispatch } from "react-redux";

import { addTodo } from "../../../toolkitRedux/todoSlice";

import AddIcon from "@mui/icons-material/Add";

import s from "./TodoAddTask.module.scss";

export const TodoAddTask = () => {
  const [task, setTask] = useState<string>(localStorage.getItem("task") || "");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task) {
      dispatch(addTodo(task));
    }
    setTask("");
    localStorage.removeItem("task");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className={s.todoAddTask}>
      <input
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        className={s.todoAddTask__input}
      />
      <button onClick={handleAddTodo} className={s.todoAddTask__button} data-testid="button-add">
        <AddIcon />
      </button>
    </div>
  );
};
