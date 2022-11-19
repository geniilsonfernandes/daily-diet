export type StatisticsTypes = {
  percent: number;
};

export type DietTypes = "yes" | "no";

export interface MealTypes {
  name: string;
  description: string;
  date: string | number;
  time: string;
  diet: DietTypes;
  id: string;
  dataRaw: Date | undefined;
}

export interface Meals {
  [date: string]: MealTypes[];
}

export type FormData = {
  name: string;
  description: string;
  date: string;
  time: string;
  diet: DietTypes;
};
