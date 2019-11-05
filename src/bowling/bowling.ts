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

  const latestRound = state.rounds.pop() || [];

  return { ...state, rounds: [...state.rounds, [...latestRound, pins]] };
}
