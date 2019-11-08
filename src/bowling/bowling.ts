type Round = number[];

export interface BowlingGameState {
  rounds?: Array<Round>;
}

type Pins = number;

const STRIKE = 10;

export function roll(pins: Pins, state: BowlingGameState) {
  const rounds = (state.rounds || []).slice();
  const latestRound: Round = rounds.pop() || [];

  if (rounds.length === 9 && latestRound[0] === 10) {
    return setRounds(state, [...rounds, [...latestRound, pins]]);
  }

  if (roundFinished(latestRound)) {
    return setRounds(state, [...rounds, latestRound, [pins]]);
  }

  return setRounds(state, [...rounds, [...latestRound, pins]]);
}

function roundFinished(latestRound: Partial<Round>): boolean {
  return latestRound.length === 2 || latestRound[0] === STRIKE;
}

function setRounds(state: BowlingGameState, rounds: Array<Round>): BowlingGameState {
  return {
    ...state,
    rounds,
  };
}
