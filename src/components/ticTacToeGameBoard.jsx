import { useState, useEffect } from "react";
import gameBoard from "./gameBoardInfo";
import players from "../players";
import "./ticTacToeGameBoard.css";

function TicTacToeGameBoard({
  cellSize,
  updateCurrentPlayerPlayingStatus,
  xIsPlaying,
}) {
  const winDelay = 500;
  const [gameBoardCellsState, setPlayedValue] = useState(Array(9).fill(null));
  const [movesPlayed, setMovesPlayed] = useState(0);
  useEffect(() => {
    if (movesPlayed > 4) {
      console.log(movesPlayed);
      if (gameBoard.checkForWinningCombinations(gameBoardCellsState)) {
        players.allWins++;
        if (!xIsPlaying) {
          players.xPlayersWins++;
        }

        setTimeout(() => {
          setMovesPlayed(0);
          setPlayedValue(Array(9).fill(null));
          updateCurrentPlayerPlayingStatus();
        }, winDelay);
      }
    }
    if (movesPlayed >= 9) {
      setTimeout(() => {
        setPlayedValue(Array(9).fill(null));
        setMovesPlayed(0);
      }, winDelay);
    }
  }, [gameBoardCellsState, movesPlayed]);

  const handleCellClick = (index) => {
    if (gameBoardCellsState[index] !== null) return;

    setPlayedValue((prev) => {
      const updatedCells = [...prev];
      updatedCells[index] = xIsPlaying ? "X" : "O";
      return updatedCells;
    });

    setMovesPlayed((prev) => prev + 1);
    updateCurrentPlayerPlayingStatus();
  };

  const cellStyle = {
    pointerEvents: "click",
    display: "flex",
    borderStyle: "Solid",
    border: "2px solid white",
    width: `${cellSize}px`,
    height: `${cellSize}px`,
    alignItems: "center",
    justifyContent: "center",
    fontSize: `${cellSize / 2}px`,
    cursor: "pointer",
    zIndex: "1",
  };

  const gameBoardCells = gameBoardCellsState.map((cell, index) => (
    <div
      key={"cell" + index}
      className="cell"
      style={cellStyle}
      onClick={() => handleCellClick(index)}
    >
      {cell}
    </div>
  ));

  const gameBoardSize = cellSize * 3 + 6 * 2;
  const gameBoardStyle = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: `${gameBoardSize}px`,
    height: `${gameBoardSize}px`,
    borderStyle: "solid",
    borderWidth: "10px",
    borderColor: "white",
    borderRadius: "10px",
  };

  return (
    <div id="gameBoard" style={gameBoardStyle}>
      {gameBoardCells}
    </div>
  );
}

export default TicTacToeGameBoard;
