type Round = [number, number?];
type FinalRound = [number, number?, number?];

export interface BowlingGameState {
  rounds?: Array<Round | FinalRound>;
}

type Pins = number;

const STRIKE = 10;

export function roll(pins: Pins, state: BowlingGameState) {
  const rounds = (state.rounds || []).slice();
  const latestRound = rounds.pop() || [];

  if (normalRoundFinished(latestRound as Round)) {
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

function normalRoundFinished(latestRound: Round | []) {
  return latestRound.length === 2 || latestRound[0] === STRIKE;
}
