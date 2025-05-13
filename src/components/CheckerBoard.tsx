import { useState } from "react";
import ChessSquare from "./ChessSquare";
import { initializeBoard } from "../utils/initializeBoard";

const CheckerBoard = () => {
  const [board, setBoard] = useState<[][]>(initializeBoard());

  return (
    <div className="inline-block border border-gray-800">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((col, colIndex) => {
            const position = `${rowIndex}${colIndex}`;
            const isBlack = (rowIndex + colIndex) % 2 === 1;

            return <ChessSquare key={position} isBlack={isBlack} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default CheckerBoard;
