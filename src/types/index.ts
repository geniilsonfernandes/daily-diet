export type StatisticsTypes = {
  percent: number;
};

export type DietTypes = "yes" | "no";

export interface MealTypes {
  name: string;
  description: string;
  date: string;
  time: string;
  diet: DietTypes;
  id: string;
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

export type FilterdData = {
  title: string;
  data: MealTypes[];
};

export type UserStatisticsTypes = {
  sequence: MealTypes[];
  bestSequenc: number;
  diet: {
    inDiet: number;
    outDiet: number;
    allMeals: number;
  };
  percentage: number;
};
