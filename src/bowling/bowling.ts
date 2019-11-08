type Round = [number, number?];
type FinalRound = [number, number?, number?];

export interface BowlingGameState {
  rounds?: Array<Round | FinalRound>;
}

type Pins = number;

export function roll(pins: Pins, state: BowlingGameState) {
  const rounds = (state.rounds || []).slice();
  const latestRound = rounds.pop() || [];

  if (latestRound.length === 2 || latestRound[0] === 10) {
    return {
      ...state,
      rounds: [...rounds, latestRound, [pins]],
    };
  }

  return {
    ...state,
    rounds: [...rounds, [...latestRound, pins]],
  };
}
