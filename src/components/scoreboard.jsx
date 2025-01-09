import players from "../players";
import gameBoard from "./gameBoardInfo";
import "./scoreboard.css";

function scoreboard({ cellSize, xIsPlaying }) {
  const scoreboardInficatorStyle = {
    position: "absolute",
    backgroundColor: " rgb(0 81 255 / 49%)",
    height: `${cellSize / 2 - 15}px`,
    width: `${gameBoard.size(cellSize) / 2}px`,
    margin: `${xIsPlaying ? "0px 200px 0px 0px" : "0px 0px 0px 200px"}`,
    borderRadius: "10px 10px 0px 0px",
    transition: "all 0.5s ease-in",
  };
  const scoreboardStlye = {
    overflow: "hidden",
    display: "flex",
    width: `${gameBoard.size(cellSize)}px`,
    height: `${cellSize * 3}`,
    borderRadius: "10px 10px 0px 0px",
    backgroundColor: "aliceblue",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <>
      <div id="scoreboard" style={scoreboardStlye}>
        <div id="scoreboardInficator" style={scoreboardInficatorStyle}></div>
        <h1 className="score">Player X: {players.xPlayersWins}</h1>
        <div className="scoreDivider"></div>
        <h1 className="score">
          Player O: {players.allWins - players.xPlayersWins}
        </h1>
      </div>
    </>
  );
}

export default scoreboard;
