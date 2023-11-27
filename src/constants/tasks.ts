export type TaskItemType = {
  id: string;
  title: string;
  completed: boolean;
  type: "Work" | "Personal";
};

export const TasksArray: TaskItemType[] = [];
