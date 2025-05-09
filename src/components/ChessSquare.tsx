type ChessQuareProps = {
  isBlack: boolean;
};
const ChessSquare = ({ isBlack }: ChessQuareProps) => {
  return (
    <div
      className={`w-20 h-20 flex items-center justify-center ${
        isBlack ? "bg-gray-700" : "bg-gray-200"
      }`}
    ></div>
  );
};

export default ChessSquare;
