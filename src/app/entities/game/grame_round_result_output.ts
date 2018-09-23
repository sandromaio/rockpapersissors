export class GameRoundResultOutput {
  playerOneWins: number;
  playerTwoWins: number;
  draws: number;
  playerOneWon: boolean;
  playerTwoWon: boolean;
  drawWon: boolean;

  constructor(playerOneWins: number, playerTwoWins: number, draws: number, playerOneWon: boolean, playerTwoWon: boolean, drawWon: boolean) {
    this.playerOneWins = playerOneWins;
    this.playerTwoWins = playerTwoWins;
    this.draws = draws;
    this.playerOneWon = playerOneWon;
    this.playerTwoWon = playerTwoWon;
    this.drawWon = drawWon;
  }

}