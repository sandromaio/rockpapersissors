import { HandType } from "../../../entities/game/enum/hand_type";
import { RoundType } from "../../../entities/game/enum/round_type";
import { GameHistoryResult } from "../../../entities/game/game_history_result";

export interface IGameHistory {
  getFullListOfHistory(): GameHistoryResult[];
  getVictoryPredictionFromLastHand(): HandType;
  chechAndSaveHand(playerHand: HandType, opponentHand: HandType): RoundType;
}