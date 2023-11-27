import { MouseEventHandler } from "react";

const PrimaryBtn = ({
  children,
  btnStyle,
  btnType,
  onClickHanlder,
}: {
  children: React.ReactNode;
  btnStyle?: string;
  btnType: "button" | "submit" | "reset" | undefined;
  onClickHanlder?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      type={btnType}
      className={`bg-primary px-[1rem] py-[0.5rem] rounded-[2rem] max-h-[2.5rem] text-base text-[--text-color] ${btnStyle}`}
      onClick={onClickHanlder}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
