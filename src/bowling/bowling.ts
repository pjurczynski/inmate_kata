type Round = [number, number?];

export interface BowlingGameState {
  rounds?: Array<Round>;
}

type Pins = number;

const STRIKE = 10;

export function roll(pins: Pins, state: BowlingGameState) {
  const rounds = (state.rounds || []).slice();
  const latestRound: Round | [] = rounds.pop() || [];

  if (roundFinished(latestRound)) {
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

function roundFinished(latestRound: Round | []) {
  return latestRound.length === 2 || latestRound[0] === STRIKE;
}
