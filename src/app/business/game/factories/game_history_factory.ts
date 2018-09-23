import { GameHistory } from "../game_history";
import { IGameHistory } from "../interfaces/igame_history";

export class GameHistoryFactory {

  newIntance(): IGameHistory {
    return new GameHistory();
  }

}