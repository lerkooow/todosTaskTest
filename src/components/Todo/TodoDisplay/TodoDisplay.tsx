import { useState } from "react";

import { useSelector } from "react-redux";

import { selectAllTodo } from "../../../toolkitRedux/todoSlice";

import { itemsOptions, TaskFilters } from "../../../constants/taskFilters";

import { TodoAddTask } from "../TodoAddTask/TodoAddTask";
import { TodoPanel } from "../TodoPanel/TodoPanel";
import { FilterButtons } from "../FilterButtons/FilterButtons";

import s from "./TodoDisplay.module.scss";

export const TodoDisplay = () => {
  const [filter, setFilter] = useState<TaskFilters>(TaskFilters.All);

  const todo = useSelector(selectAllTodo);

  const filteredTodo = todo.filter((todo) => {
    if (filter === TaskFilters.Completed) return todo.checked;
    if (filter === TaskFilters.Active) return !todo.checked;
    return true;
  });

  const itemsLeft = todo.filter((todo) => !todo.checked).length;

  return (
    <div className={s.todoDisplay__wrapper}>
      <TodoAddTask />
      <div className={s.todoDisplay__taskList}>
        <TodoPanel todos={filteredTodo} filter={filter} />
      </div>
      <div className={s.todoDisplay__footer}>
        <div className={s.todoDisplay__footerControls}>
          <p className={s.todoDisplay__items}>
            {filter === TaskFilters.All ? itemsLeft : filteredTodo.length} {itemsOptions[filter]}
          </p>
          <FilterButtons currentFilter={filter} onChangeFilter={setFilter} />
        </div>
      </div>
    </div>
  );
};
