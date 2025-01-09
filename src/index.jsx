import TicTacToeGameBoard from "./components/ticTacToeGameBoard";
import Scoreboard from "./components/scoreboard";
import "./index.css";
import { useState } from "react";

function Game({ cellSize }) {
  let [xIsPlaying, setXStatus] = useState(true);
  return (
    <>
      <div id="gameBoardWrapper">
        <Scoreboard cellSize={cellSize} xIsPlaying={xIsPlaying} />
        <TicTacToeGameBoard
          xIsPlaying={xIsPlaying}
          cellSize={cellSize}
          updateCurrentPlayerPlayingStatus={() => {
            setXStatus((xIsPlaying = !xIsPlaying));
          }}
        />
      </div>
    </>
  );
}

export default Game;
