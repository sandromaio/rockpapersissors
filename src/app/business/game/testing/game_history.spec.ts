import { GameHistory } from '../game_history';
import { HandType } from '../../../entities/game/enum/hand_type';

describe('Game History class', () => {

  it('should create object', () => {
    const history = new GameHistory();
    expect(history).toBeTruthy();
  });

  it('should have empty history', () => {
    const history = new GameHistory();
    let lastHand = history.getVictoryPredictionFromLastHand(); // this will come as a string
    expect(Object.keys(HandType)).toContain(lastHand.toString());
  });

  it('should get an history array', () => {
    const history = new GameHistory();
    let list = history.getFullListOfHistory(); // this will come as a string
    expect(typeof list).toEqual('object');
  });

  it('should get 1 row history', () => {
    const history = new GameHistory();
    history.chechAndSaveHand(HandType.Paper, HandType.Scissors);
    let list = history.getFullListOfHistory(); // this will come as a string
    expect(list.length).toEqual(1);
  });



  
});