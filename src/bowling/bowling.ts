type Round = [number, number?];
type FinalRound = [number, number?, number?];

export interface BowlingGameState {
  rounds?: Array<Round | FinalRound>;
}

type Pins = number;

export function roll(pins: Pins, state: BowlingGameState) {
  if (!state.rounds) {
    return { ...state, rounds: [[pins]] };
  }

  const rounds = state.rounds.slice();
  const latestRound = rounds.pop() || [];

  if (latestRound.length === 2) {
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
