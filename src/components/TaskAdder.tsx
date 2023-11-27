import { useState } from "react";
import { TaskItemType } from "../constants/tasks";
import PrimaryBtn from "../common/ui/reusables/PrimaryBtn";
import classes from "./styles/TaskAdder.module.css";

const TaskAdder = ({
  setTaskList,
}: {
  setTaskList: React.Dispatch<React.SetStateAction<TaskItemType[]>>;
}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskType, setTaskType] = useState("Work");

  const titleChangeHandler = (e: { target: { value: string } }) => {
    setTaskTitle(e.target.value);
  };

  const typeChangeHandler = (e: { target: { value: string } }) => {
    setTaskType(e.target.value);
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const idType = taskType === "Work" ? "W" : "P";

    // Generate a random number and convert it to a string
    const randomId = Math.floor(Math.random() * 1000000).toString();

    const newTaskItem = {
      id: `${idType} - ${randomId}`,
      title: taskTitle,
      completed: false,
      type: taskType as "Work" | "Personal",
    };

    setTaskList((prevTasks) => [...prevTasks, newTaskItem]);
    console.log(newTaskItem); // Logging the new task for verification
  };

  return (
    <form onSubmit={submitHandler} className="md:flex md:justify-center py-3">
      <div className={classes.gridContainer}>
        <div className="grid">
          <label className="text-lg font-semibold block" htmlFor="taskTitle">
            Enter Your Task
          </label>
          <input
            type="text"
            value={taskTitle}
            id="taskTitle"
            onChange={titleChangeHandler}
            className="px-2 py-1 rounded-sm bg-[--bg-input]"
          />
        </div>
        <select
          value={taskType}
          onChange={typeChangeHandler}
          className="p-2 rounded-sm text-sm  bg-[--bg-input]"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <PrimaryBtn btnType="submit">Add New Task</PrimaryBtn>
      </div>
    </form>
  );
};

export default TaskAdder;
