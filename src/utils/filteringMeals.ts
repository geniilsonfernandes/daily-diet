import { FilterdData, MealTypes } from "../types";

export function filteringMeals(meals: MealTypes[]) {
  const filteredMeals = meals.reduce(
    (acc, item) => {
      return {
        ...acc,

        [item.date]:
          acc[item.date] !== undefined ? [...acc[item.date], item] : [item]
      };
    },
    {} as {
      [title: string]: MealTypes[];
    }
  );

  const parserdMeals: FilterdData[] = [];

  for (const [key, value] of Object.entries(filteredMeals)) {
    parserdMeals.push({ title: key, data: value });
  }

  const sequence = meals.reduce(
    (acc, item) => {
      let secvalid: MealTypes[] = [];

      item.diet !== "no"
        ? (secvalid = [...acc.sequence, item])
        : (secvalid = []);

      const best =
        secvalid.length > acc.bestSequenc ? secvalid.length : acc.bestSequenc;

      return {
        sequence: secvalid,
        atualSequenc: secvalid.length,
        bestSequenc: best,
        diet: {
          inDiet: item.diet === "yes" ? acc.diet.inDiet + 1 : acc.diet.inDiet,
          outDiet: item.diet === "no" ? acc.diet.outDiet + 1 : acc.diet.outDiet,
          allMeals: acc.diet.allMeals + 1
        },
        percentage: (100 * acc.diet.inDiet) / acc.diet.allMeals
      };
    },
    {
      sequence: [],
      bestSequenc: 0,
      diet: {
        inDiet: 0,
        outDiet: 0,
        allMeals: 0
      },
      percentage: 0
    } as {
      sequence: MealTypes[];
      bestSequenc: number;
      diet: {
        inDiet: number;
        outDiet: number;
        allMeals: number;
      };
      percentage: number;
    }
  );

  console.log("🕶️ sequence", sequence);

  return parserdMeals;
}
