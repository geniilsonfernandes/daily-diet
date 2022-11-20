import { UserStatisticsTypes } from "./../types/index";
import { MealTypes } from "../types";

export const getUserStatistics = (data: MealTypes[]) => {
  const percet = (partialValue: number, totalValue: number) =>
    (100 * partialValue) / totalValue;

  const sequence = data.reduce(
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
        percentage: Number(
          percet(acc.diet.inDiet, acc.diet.allMeals).toFixed(0)
        )
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
    } as UserStatisticsTypes
  );

  return { sequence };
};
