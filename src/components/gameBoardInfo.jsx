const gameBoard = {
  size: (cellSize) => {
    return cellSize * 3 + 6 * 2;
  },
  checkForWinningCombinations: (currentBoardStatus) => {
    if (currentBoardStatus[4] !== null) {
      for (let i = 0; i < 4; i++) {
        if (
          currentBoardStatus[i] === currentBoardStatus[i + (4 - i)] &&
          currentBoardStatus[i] === currentBoardStatus[8 - i]
        ) {
          return true;
        }
      }
    }
    for (let i = 0; i < 2; i++) {
      if (
        currentBoardStatus[i * 2] === currentBoardStatus[i * 2 + 3] &&
        currentBoardStatus[i * 2] ===
          currentBoardStatus[i * 2 + 3 - i * 2 + (i * 2 + 3)] &&
        currentBoardStatus[i * 2] !== null
      ) {
        return true;
      }
    }

    for (let i = 0; i < 2; i++) {
      if (
        currentBoardStatus[i * 6] !== null &&
        currentBoardStatus[i * 6 + 1] === currentBoardStatus[i * 6] &&
        currentBoardStatus[i * 6 + 2] === currentBoardStatus[i * 6]
      ) {
        return true;
      }
    }
  },
};

export default gameBoard;
