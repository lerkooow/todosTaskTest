import { TodoDisplay } from "../TodoDisplay/TodoDisplay";

import s from "./TodoMain.module.scss";

export const TodoMain = () => {
  return (
    <div className={s.todoMain}>
      <div className={s.todoMain__header}>
        <h1>todos</h1>
      </div>
      <div className={s.todoMain__container}>
        <TodoDisplay />
      </div>
    </div>
  );
};
