import { MealTypes } from "../types";

export function filteringMeals(meals: MealTypes[]) {
  const filteredMeals = meals.reduce((acc: any, item) => {
    return [
      ...acc,
      {
        title: item.date,
        data:
          acc[item.date as number] !== undefined
            ? [...acc[item.date as number], item]
            : [item]
      }
    ];
  }, [] as MealTypes[]);

  return filteredMeals;
}
