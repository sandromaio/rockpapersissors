import { IGameHistory } from "./interfaces/igame_history";
import { GameHistoryFactory } from "./factories/game_history_factory";
import { PlayerType } from "../../entities/game/enum/player_type";
import { HandType } from "../../entities/game/enum/hand_type";
import { RoundType } from "../../entities/game/enum/round_type";
import { GameRoundResult } from "../../entities/game/game_round_result";
import { GameRoundResultOutput } from "../../entities/game/grame_round_result_output";

export class GameHandler {
  private _playerOne: PlayerType; //For future if want to play between human/computer and human/computer
  private _playerTwo: PlayerType; //For future if want to play between human/computer and human/computer
  private _gameHistory: IGameHistory;
  private _currentResult: GameRoundResult;


  constructor(playerOne: PlayerType, playerTwo: PlayerType) {
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
    this._gameHistory = new GameHistoryFactory().newIntance();
    this._currentResult = new GameRoundResult();
  }

  getResult(playerOne: HandType, playerTwo: HandType): GameRoundResultOutput {
    let roundType = this._gameHistory.chechAndSaveHand(playerOne, playerTwo);
    switch (roundType) {
      case RoundType.Win:
        this._currentResult.playerOneWins()
        break;
      case RoundType.Lost:
        this._currentResult.playerTwoWins()
        break;
      case RoundType.Draw:
        this._currentResult.drawWins()
        break;
    }

    return this._currentResult.returnAllInfo();
  }

  getNextMove(): HandType {
    return this._gameHistory.getVictoryPredictionFromLastHand();
  }

  allowedOptions(): string[] {
    let list = []
    for (var key in HandType) {
      if (typeof HandType[key] === 'string') {
        list.push(HandType[key])
      }
    }
    return list;
  }

  restart() {
    this._currentResult.reset();
  }

}