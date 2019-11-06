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

  const latestRound = state.rounds[state.rounds.length - 1] || [];

  if (latestRound.length === 2) {
    return {
      ...state,
      rounds: [...state.rounds.slice(1, state.rounds.length - 1), latestRound, [pins]],
    };
  }

  return {
    ...state,
    rounds: [...state.rounds.slice(1, state.rounds.length - 1), [...latestRound, pins]],
  };
}
