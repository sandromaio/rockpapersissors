import { TestBed, inject } from '@angular/core/testing';

import { GameService } from './game.service';
import { PlayerType } from '../../entities/game/enum/player_type';
import { HandType } from '../../entities/game/enum/hand_type';
import { RoundType } from '../../entities/game/enum/round_type';

describe('GameServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameService]
    });
  });

  it('should be created', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));


  it('should start game', inject([GameService], (service: GameService) => {
    spyOn(service, 'startGame')
    service.startGame(PlayerType.Human, PlayerType.Computer)
    expect(service.startGame).toHaveBeenCalledWith(PlayerType.Human, PlayerType.Computer);
  }));

  it('should restart game', inject([GameService], (service: GameService) => {
    spyOn(service, 'restart')
    service.restart()
    expect(service.restart).toHaveBeenCalled();
  }));

  it('should have done a move and tell output', inject([GameService], (service: GameService) => {
    service.startGame(PlayerType.Human, PlayerType.Computer)
    let state = service.doMove(HandType.Paper, HandType.Paper)
    expect(state.drawWon).toEqual(true);
  }));


  it('should have got computer next move', inject([GameService], (service: GameService) => {
    service.startGame(PlayerType.Human, PlayerType.Computer)
    let state = service.getComputerNextMove()
    expect(Object.keys(HandType)).toContain(state.toString());
  }));


  it('should list options', inject([GameService], (service: GameService) => {
    service.startGame(PlayerType.Human, PlayerType.Computer)
    let list = service.allowedOptions();
    expect(list.length > 0).toEqual(true);
  }));



});
