import { GameRoundResultOutput } from "./grame_round_result_output";

export class GameRoundResult {
  private _playerOneWins: number;
  private _playerTwoWins: number;
  private _draws: number;
  private _playerOneWon: boolean;
  private _playerTwoWon: boolean;
  private _drawWon: boolean;

  constructor() {
    this.reset();
  }

  reset() {
    this._playerOneWins = 0;
    this._playerTwoWins = 0;
    this._draws = 0;
  }

  get playerOne() { return this._playerOneWins; }
  get playerTwo() { return this._playerTwoWins; }
  get draws() { return this._draws; }

  playerOneWins() {
    this._playerOneWon = true;
    this._playerTwoWon = false;
    this._drawWon = false;
    this._playerOneWins++;
  }

  playerTwoWins() {
    this._playerOneWon = false;
    this._playerTwoWon = true;
    this._drawWon = false;
    this._playerTwoWins++;
  }

  drawWins() {
    this._playerOneWon = false;
    this._playerTwoWon = false;
    this._drawWon = true;
    this._draws++;
  }

  returnAllInfo(): GameRoundResultOutput {
    return new GameRoundResultOutput(
      this._playerOneWins,
      this._playerTwoWins,
      this._draws,
      this._playerOneWon,
      this._playerTwoWon,
      this._drawWon
    );
  }
}