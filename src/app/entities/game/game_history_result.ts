import { HandType } from "./enum/hand_type";
import { RoundType } from "./enum/round_type";

export class GameHistoryResult {
  private _playerOneHand: HandType;
  private _playerTwoHand: HandType;
  private _roundResult: RoundType;

  constructor(playerOneHand: HandType, playerTwoHand: HandType, roundResult: RoundType) {
    this._playerOneHand = playerOneHand;
    this._playerTwoHand = playerTwoHand;
    this._roundResult = roundResult;
  }

}