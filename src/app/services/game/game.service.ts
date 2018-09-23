import { Injectable } from '@angular/core';
import { GameHandler } from '../../business/game/game_handler';
import { PlayerType } from '../../entities/game/enum/player_type';
import { HandType } from '../../entities/game/enum/hand_type';
import { RoundType } from '../../entities/game/enum/round_type';
import { GameRoundResultOutput } from '../../entities/game/grame_round_result_output';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: GameHandler;

  startGame(playerOne: PlayerType, playerTwo: PlayerType) {
    this.game = new GameHandler(playerOne, playerTwo);
  }

  doMove(movePlayerOne: HandType, movePlayerTwo: HandType): GameRoundResultOutput {
    return this.game.getResult(movePlayerOne, movePlayerTwo);
  }

  getComputerNextMove(): HandType {
    return this.game.getNextMove();
  }

  allowedOptions(): string[] {
    return this.game.allowedOptions()
  }

  restart() {
    this.game.restart();
  }


}
