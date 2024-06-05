type ContainerProps = {
  children: React.ReactNode;
  width: number;
};

const Container = ({ children, width }: ContainerProps) => {
  return (
    <div
      className="flex justify-center w-screen"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div
        className="h-full"
        style={{ width: String(width) + "px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
