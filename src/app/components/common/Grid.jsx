const Grid = ({cols, children }) => {
  const cls = {
    3: "grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-1",
    4: "grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-1"
  };

  return (
    <div className={cls[cols]}>
      {children}
    </div>
  );
};

export default Grid;
