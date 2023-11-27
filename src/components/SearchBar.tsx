import { SetStateAction } from "react";
import classes from "./styles/SearchBar.module.css";

const SearchBar = ({
  searchKeyword,
  setSearchKeyword,
  isChecked,
  setIsChecked,
}: {
  searchKeyword: string;
  setSearchKeyword: React.Dispatch<React.SetStateAction<string>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const keywordChangeHandler = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchKeyword(e.target.value);
  };

  const checkHandler = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="flex flex-col place-items-center">
      <input
        type="text"
        value={searchKeyword}
        onChange={keywordChangeHandler}
        placeholder="Search Tasks"
        className={`text-center py-1 my-2 rounded-2xl ring-1 ring-primary bg-[--bg-input] text-[--text-color] ${classes.searchBar}`}
      />
      <div>
        <input
          id="checkBox"
          type="checkbox"
          checked={isChecked}
          onChange={checkHandler}
        />
        <label htmlFor="checkBox" className="ml-1">
          Show only uncompleted tasks
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
