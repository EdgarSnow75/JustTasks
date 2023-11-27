import { useState } from "react";
import { TaskItemType } from "../constants/tasks";
import PrimaryBtn from "../common/ui/reusables/PrimaryBtn";
import Card from "../common/ui/reusables/Card";

const TaskItem = ({
  task,
  setDeleteID,
}: {
  task: TaskItemType;
  setDeleteID: (id: string) => void;
}) => {
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const checkHandler = (e: { target: { checked: boolean } }) => {
    const status = e.target.checked;
    setIsCompleted(status);

    task.completed = status;
  };

  return (
    <li key={task.id}>
      <Card className="bg-base-300 flex justify-between gap-2 place-items-center hover:ring-1 hover:ring-secondary">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={checkHandler}
          className="checkbox checkbox-success"
        />
        <h2 className={`${isCompleted ? "line-through text-[#808080]" : ""}`}>
          {task.title}
        </h2>
        <PrimaryBtn
          btnType="button"
          onClickHanlder={() => setDeleteID(task.id)}
        >
          Delete
        </PrimaryBtn>
      </Card>
    </li>
  );
};

export default TaskItem;
