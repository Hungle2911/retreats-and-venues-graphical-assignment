import ChessSquare from "./ChessSquare";

const CheckerBoard = () => {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="inline-block border border-gray-800">
      {ranks.map((rank, rankIndex) => (
        <div key={rank} className="flex">
          {files.map((file, fileIndex) => {
            const position = `${file}${rank}`;
            const isBlack = (rankIndex + fileIndex) % 2 === 1;

            return <ChessSquare key={position} isBlack={isBlack} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default CheckerBoard;
