import { GameRules } from '../game_rules';
import { HandType } from '../../../entities/game/enum/hand_type';
import { RoundType } from '../../../entities/game/enum/round_type';

describe('Game Rules class', () => {

  it('should check', () => {
    const rules = GameRules;
    expect(rules).toBeTruthy();
  });

  it('should win Hand', () => {
    const victory = GameRules.isVictoryHand(HandType.Rock, HandType.Scissors);
    expect(victory).toBe(RoundType.Win);
  });

  it('should loose Hand', () => {
    const victory = GameRules.isVictoryHand(HandType.Paper, HandType.Scissors);
    expect(victory).toBe(RoundType.Lost);
  });

  it('should draw Hand', () => {
    const victory = GameRules.isVictoryHand(HandType.Paper, HandType.Paper);
    expect(victory).toBe(RoundType.Draw);
  });
});