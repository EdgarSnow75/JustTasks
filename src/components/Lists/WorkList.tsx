import { useState } from "react";
import { TaskItemType } from "../../constants/tasks";
import TaskItem from "../TaskItem";
import Card from "../../common/ui/reusables/Card";
import classes from "./style/WorkList.module.css";

const WorkList = ({ tasks }: { tasks: TaskItemType[] }) => {
  const [deletedIDs, setDeletedIDs] = useState<string[]>([]);

  const filteredTasks = tasks.filter(
    (task) => task.type == "Work" && !deletedIDs.includes(task.id)
  );

  const handleTaskDelete = (id: string) => {
    setDeletedIDs((prevDeletedIDs) => [...prevDeletedIDs, id]);
  };
  return (
    <>
      {filteredTasks.length !== 0 ? (
        <Card>
          <h2 className="text-xl mb-2 text-center">Work Tasks</h2>
          <ul className={classes.gridContainer}>
            {filteredTasks.map((task: TaskItemType) => (
              <TaskItem
                task={task}
                key={task.id}
                setDeleteID={handleTaskDelete}
              />
            ))}
          </ul>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default WorkList;
