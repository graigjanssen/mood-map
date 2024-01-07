export interface DietEntry {
  meal: "breakfast" | "lunch" | "dinner" | "snack";
  healthRating: 1 | 2 | 3 | 4 | 5;
}

type ExerciseStrengthEntry = {
  exerciseName: string;
  type: 'strength';
  sets: number;
  reps: number;
}

type ExerciseCardioEntry = {
  exerciseName: string;
  type: 'cardio';
  minutes: number;
}

export type ExerciseEntry = ExerciseStrengthEntry | ExerciseCardioEntry;

export interface SleepEntry {
  hours: number;
  quality: 1 | 2 | 3 | 4 | 5;
}

export interface DailyEntry {
  date: string;
  moodRating: number | null;
  moodDescription?: string;
  journalEntry?: string;
  diet?: DietEntry[];
  exercise?: ExerciseEntry[];
  sleep?: SleepEntry;
}
