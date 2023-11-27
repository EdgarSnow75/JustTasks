import { useState } from "react";
import { TaskItemType } from "../../constants/tasks";
import TaskItem from "../TaskItem";
import Card from "../../common/ui/reusables/Card";
import classes from "./style/PersonalList.module.css";

const PersonalList = ({ tasks }: { tasks: TaskItemType[] }) => {
  const [deletedIDs, setDeletedIDs] = useState<string[]>([]);

  const filteredTasks = tasks.filter(
    (task) => task.type == "Personal" && !deletedIDs.includes(task.id)
  );

  const handleTaskDelete = (id: string) => {
    setDeletedIDs((prevDeletedIDs) => [...prevDeletedIDs, id]);
  };
  return (
    <>
      {filteredTasks.length !== 0 ? (
        <Card>
          <h2 className="text-xl mb-2 text-center">Personal Tasks</h2>
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

export default PersonalList;
