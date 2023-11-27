import ThemeToggler from "./ThemeToggler";
import logoPic from "/images/logo/logo-mainv1.png";

const HeaderNav = () => {
  return (
    <header className="flex sticky shadow-md bg-[--bg-header] min-h-[3rem] justify-between place-items-center w-full px-6 py-2 top-0">
      <div></div>
      <div className="">
        <img src={logoPic} alt="Just Task Logo" width={150} />
      </div>
      <ThemeToggler />
    </header>
  );
};

export default HeaderNav;
