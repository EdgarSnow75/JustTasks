import { useEffect, useState } from "react";
import HeaderNav from "./common/ui/components/HeaderNav";
import TaskAdder from "./components/TaskAdder";
import TaskList from "./components/TaskList";
import { TaskItemType, TasksArray } from "./constants/tasks";
import SearchBar from "./components/SearchBar";

function App() {
  const [taskList, setTaskList] = useState<TaskItemType[]>(TasksArray);
  const [filteredTaskList, setFilteredTaskList] =
    useState<TaskItemType[]>(taskList);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (searchKeyword !== "") {
      const filteredTasks = taskList.filter((task) =>
        task.title.includes(searchKeyword)
      );

      setFilteredTaskList(filteredTasks);
    } else if (isChecked) {
      const filteredTasks = taskList.filter((task) => !task.completed);
      setFilteredTaskList(filteredTasks);
    } else {
      setFilteredTaskList(taskList);
    }
  }, [searchKeyword, taskList, isChecked]);

  return (
    <>
      <HeaderNav />
      <main>
        <h1 className="text-center my-4 text-2xl font-semibold">
          Welcome to <span className="text-primary">JustTasks!</span>
        </h1>
        <TaskAdder setTaskList={setTaskList} />
        {taskList.length === 0 ? (
          <h2 className="text-center my-4 text-2xl font-semibold">
            There are no tasks currently. Start adding a task now
          </h2>
        ) : (
          <h2 className="text-center my-4 text-2xl font-semibold">
            Here are your tasks for the day!
          </h2>
        )}

        {taskList.length != 0 ? (
          <SearchBar
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
        ) : (
          ""
        )}

        <div>
          <TaskList tasks={filteredTaskList} />
        </div>
      </main>
    </>
  );
}

export default App;
