import { TaskItemType } from "../constants/tasks";
import PersonalList from "./Lists/PersonalList";
import WorkList from "./Lists/WorkList";

const TaskList = ({ tasks }: { tasks: TaskItemType[] }) => {
  return (
    <div className="flex flex-col justify-center gap-y-5 py-5">
      <WorkList tasks={tasks} />
      <PersonalList tasks={tasks} />
    </div>
  );
};

export default TaskList;
