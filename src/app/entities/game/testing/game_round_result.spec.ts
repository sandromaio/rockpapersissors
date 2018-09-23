import { GameRoundResult } from "../game_round_result";

describe('Game Round Result class', () => {
  const rounds = new GameRoundResult();

  it('should create object', () => {
    expect(rounds).toBeTruthy();
  });

  it('should player one wins', () => {
    rounds.playerOneWins()
    expect(rounds.playerOne).toEqual(1);
  });

  it('should player two wins', () => {
    rounds.playerTwoWins()
    expect(rounds.playerTwo).toEqual(1);
  });

  it('should draw ', () => {
    rounds.drawWins()
    expect(rounds.draws).toEqual(1);
  });
});