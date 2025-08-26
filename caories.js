export interface DailyEntry {
  date: string; // YYYY-MM-DD format
  consumed: number;
  goal: number;
  entries: CalorieEntry[];
}

export interface CalorieEntry {
  id: string;
  description: string;
  calories: number;
  timestamp: number;
  source: 'manual' | 'ai';
}

export interface UserSettings {
  dailyCalorieGoal: number;
  isOnboarded: boolean;
  language: 'en' | 'de' | 'es';
  profilePicture?: string;
}

export type HistoryPeriod = '7days' | 'month' | 'year';