import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game/game.service';
import { PlayerType } from '../../../entities/game/enum/player_type';
import { RoundType } from '../../../entities/game/enum/round_type';
import { HandType } from '../../../entities/game/enum/hand_type';
import { GameRoundResultOutput } from '../../../entities/game/grame_round_result_output';

@Component({
  selector: 'ovo-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {
  statusOfMove: GameRoundResultOutput;
  computerMove: HandType;
  handTypeEnum = HandType;
  avalableList;

  constructor(
    private gameSvc: GameService
  ) {
  }

  ngOnInit() {
    this.gameSvc.startGame(PlayerType.Human, PlayerType.Computer);
    this.avalableList = this.gameSvc.allowedOptions();
  }

  doMove(playerMove: HandType) {
    this.computerMove = this.gameSvc.getComputerNextMove();
    this.statusOfMove = this.gameSvc.doMove(playerMove, this.computerMove)
  }

  allowedOptions() {
    return this.gameSvc.allowedOptions();
  }

  restart() {
    this.computerMove = null;
    this.statusOfMove = null;
    this.gameSvc.restart();
  }






}
