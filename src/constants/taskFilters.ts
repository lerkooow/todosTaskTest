export type TTaskFilter = "all" | "active" | "completed";

export const TaskFilters = {
  All: "all" as TTaskFilter,
  Active: "active" as TTaskFilter,
  Completed: "completed" as TTaskFilter,
};

export const filterOptions = {
  [TaskFilters.All]: "No tasks...",
  [TaskFilters.Active]: "No active tasks...",
  [TaskFilters.Completed]: "No completed tasks...",
};

export const buttonLabels = {
  [TaskFilters.All]: "All",
  [TaskFilters.Active]: "Active",
  [TaskFilters.Completed]: "Completed",
};

export const itemsOptions = {
  [TaskFilters.All]: "items left",
  [TaskFilters.Active]: "items active",
  [TaskFilters.Completed]: "items completed",
};
