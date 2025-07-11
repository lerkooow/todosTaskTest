import { useDispatch } from "react-redux";

import { buttonLabels, TaskFilters, type TTaskFilter } from "../../../constants/taskFilters";
import { clearCompleted } from "../../../toolkitRedux/todoSlice";

import s from "./FilterButtons.module.scss";

interface FilterButtonsProps {
  currentFilter: TTaskFilter;
  onChangeFilter: (filter: TTaskFilter) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ currentFilter, onChangeFilter }) => {
  const dispatch = useDispatch();

  return (
    <>
      {Object.values(TaskFilters).map((taskFilter) => (
        <button key={taskFilter} onClick={() => onChangeFilter(taskFilter)} className={`${s.filterButton} ${currentFilter === taskFilter ? s.active : ""}`} data-testid={`filter-${taskFilter}`}>
          {buttonLabels[taskFilter]}
        </button>
      ))}
      <button onClick={() => dispatch(clearCompleted())} className={s.clear}>
        Clear completed
      </button>
    </>
  );
};
