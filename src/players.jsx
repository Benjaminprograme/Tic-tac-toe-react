const players = {
  updateToNewPlayer() {
    this.xIsPlaying = !this.xIsPlaying;
    if (this.xIsPlayingState) this.xIsPlayingState(this.xIsPlaying);
  },
  allWins: 0,
  xPlayersWins: 0,
  draws: 0,
};

export default players;
