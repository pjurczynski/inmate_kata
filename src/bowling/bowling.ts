type Round = [number, number?];
type FinalRound = [number, number?, number?];

export interface BowlingGameState {
  rounds?: Array<Round | FinalRound>;
}

type Pins = number;

export function roll(pins: Pins, state: BowlingGameState) {
  return { rounds: [[pins]] };
}