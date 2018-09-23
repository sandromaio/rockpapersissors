import { HandType } from "../../entities/game/enum/hand_type";
import { RoundType } from "../../entities/game/enum/round_type";

export abstract class GameRules {
  static isVictoryHand(playerOne: HandType, playerTwo: HandType): RoundType {
    switch (playerOne) {
      case HandType.Paper:
        switch (playerTwo) {
          case HandType.Paper: return RoundType.Draw;
          case HandType.Scissors: return RoundType.Lost;
          case HandType.Rock: return RoundType.Win;
        }

      case HandType.Scissors:
        switch (playerTwo) {
          case HandType.Paper: return RoundType.Win;
          case HandType.Scissors: return RoundType.Draw;
          case HandType.Rock: return RoundType.Lost;
        }

      case HandType.Rock:
        switch (playerTwo) {
          case HandType.Paper: return RoundType.Lost;
          case HandType.Scissors: return RoundType.Win;
          case HandType.Rock: return RoundType.Draw;
        }

      default:
        throw (playerOne.toString() + ' is victory hand not defined ' + playerTwo.toString());  
    }
  }

  static winnerHand(hand: HandType): HandType {
    switch (hand) {
      case HandType.Paper: return HandType.Rock;
      case HandType.Scissors: return HandType.Rock;
      case HandType.Rock: return HandType.Paper;
      default:
        throw (hand + ' winner hand not defined');
    }
  }

}