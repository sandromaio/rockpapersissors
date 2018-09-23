import { GameHandler } from '../game_handler';
import { PlayerType } from '../../../entities/game/enum/player_type';
import { HandType } from '../../../entities/game/enum/hand_type';
import { RoundType } from '../../../entities/game/enum/round_type';

describe('Game handler class', () => {
  let game = new GameHandler(PlayerType.Human,PlayerType.Computer);

  it('should create object', async () => {
    expect(game).toBeTruthy();
  });


  it('should win', async () => {
    let move = game.getResult(HandType.Paper, HandType.Rock);
    expect(move.playerOneWon).toEqual(true);
  });

  it('should have history', async () => {
    let move = game.getNextMove();
    expect(Object.keys(HandType)).toContain(move.toString());
  });

  it('should have restarted', async () => {
    spyOn(game , 'restart');
    game.restart();
    expect(game.restart).toHaveBeenCalled();
  });

  it('should list options', async () => {
    let list = game.allowedOptions();
    expect(list.length > 0).toEqual(true);
  });
  
});