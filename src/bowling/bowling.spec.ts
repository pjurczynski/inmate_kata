import { roll, BowlingGameState } from './bowling';

describe('Bowling game', () => {
  describe('roll()', () => {
    it('should add the first roll into rounds of the state', () => {
      const state = {};
      const pins = 10;

      const newState = roll(pins, state);

      expect(newState).toEqual({ rounds: [[10]] });
    });

    it('should add the roll into rounds of the state', () => {
      const state: BowlingGameState = { rounds: [[7]] };
      const pins = 3;

      const newState = roll(pins, state);

      expect(newState).toEqual({ rounds: [[7, 3]] });
    });

    it('should start a new round', () => {
      const state: BowlingGameState = { rounds: [[1, 9]] };
      const pins = 8;

      const newState = roll(pins, state);

      expect(newState).toEqual({ rounds: [[1, 9], [8]] });
    });

    it('should start a new round if previous roll was a strike', () => {
      const state: BowlingGameState = { rounds: [[10]] };
      const pins = 1;

      const newState = roll(pins, state);

      expect(newState).toEqual({ rounds: [[10], [1]] });
    });

    it('in last round, you can score 2 tens', () => {
      const state: BowlingGameState = {
        rounds: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10]],
      };
      const pins = 10;

      const newState = roll(pins, state);

      expect(newState).toEqual({
        rounds: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]],
      });
    });

    it.skip('in last round, you can score 3 tens', () => {
      const state: BowlingGameState = {
        rounds: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10]],
      };
      const pins = 10;

      const newState = roll(pins, state);

      expect(newState).toEqual({
        rounds: [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]],
      });
    });
  });
});
