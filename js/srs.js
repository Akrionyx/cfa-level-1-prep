// Spaced repetition: a trimmed-down SM-2. Intervals are in days.

import { daysFromNow } from './util.js';

export const INITIAL = { reps: 0, interval: 0, due: null };

// Deliberately front-loaded: L1 candidates study over months, not years.
const LADDER = [1, 3, 7, 16, 35, 70, 120];

export function schedule(prev = INITIAL, correct) {
  if (!correct) {
    // Missed items come back the next study day and drop a rung, never below the first.
    const reps = Math.max(0, (prev.reps || 0) - 2);
    return { reps, interval: 1, due: daysFromNow(1) };
  }
  const reps = Math.min((prev.reps || 0) + 1, LADDER.length);
  const interval = LADDER[reps - 1];
  return { reps, interval, due: daysFromNow(interval) };
}
