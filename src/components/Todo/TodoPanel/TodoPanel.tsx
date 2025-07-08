import { useDispatch } from "react-redux";

import { deleteTask, toggleTodo } from "../../../toolkitRedux/todoSlice";
import { TaskFilters, filterOptions } from "../../../constants/taskFilters";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import s from "./TodoPanel.module.scss";

type TodoItemType = {
  id: number;
  task: string;
  checked: boolean;
};

interface TodoPanelProps {
  todos: TodoItemType[];
  filter: TaskFilters;
}

export const TodoPanel = ({ todos, filter }: TodoPanelProps) => {
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <span className={s.text}>{filterOptions[filter]}</span>;
  }

  return (
    <>
      <ul className={s.todoPanel}>
        {todos.map((item) => (
          <div className={s.todoPanel__wrapper} key={item.id}>
            <li className={`${s.todoPanel__item} ${item.checked ? s.todoPanel__completed : ""}`}>
              <input
                checked={item.checked}
                onChange={() => dispatch(toggleTodo(item.id))}
                color="default"
                aria-label={item.task}
                data-testid={`check-${item.id}`}
                type="checkbox"
                className={s.todoPanel__checkbox}
              />
              <span className={s.todoPanel__task}>{item.task}</span>
            </li>
            <button
              data-testid={`delete-${item.id}`}
              onClick={() => dispatch(deleteTask(item.id))}
              className={s.todoPanel__clearButton}
            >
              <DeleteOutlinedIcon />
            </button>
          </div>
        ))}
      </ul>
    </>
  );
};
