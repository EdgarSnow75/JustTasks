const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`p-3 bg-base-200 rounded-xl ring-1 ring-[#343a40] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
