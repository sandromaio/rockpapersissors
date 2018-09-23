import { IGameHistory } from "./interfaces/igame_history";
import { HandType } from "../../entities/game/enum/hand_type";
import { GameHistoryResult } from "../../entities/game/game_history_result";
import { GameRules } from "../rules/game_rules";
import { RoundType } from "../../entities/game/enum/round_type";

export class GameHistory implements IGameHistory {
  private _history: GameHistoryResult[];

  constructor() {
    this._history = [];
  }

  getFullListOfHistory(): GameHistoryResult[] {
    return this._history;
  }

  chechAndSaveHand(playerHand: HandType, opponentHand: HandType): RoundType {
    let roundResult = GameRules.isVictoryHand(playerHand, opponentHand);
    this._history.push(
      new GameHistoryResult(playerHand, opponentHand, roundResult)
    )
    return roundResult;
  }

  private getLastHand(): GameHistoryResult {
    return this._history.length == 0 ? null : this._history[this._history.length - 1];
  }

  getVictoryPredictionFromLastHand(): HandType {
    let lastHand = this.getLastHand();
    // To put here the logic for prediction, for now I will only return a random output 
    // if(lastHand){
    //   let handPlayed = lastHand.myHand;

    // }
    return this.getRandomHand()
  }

  private getRandomHand(): HandType {
    var tmpList = Object.keys(HandType);
    var randomHand = tmpList[Math.floor(Math.random() * (tmpList.length / 2))];

    let tmpNumber = parseInt(randomHand); 
    if (typeof tmpNumber === 'number') {
      return tmpNumber;
    }
    return HandType[randomHand];
  }

}