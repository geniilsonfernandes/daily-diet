import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealTypes } from "../types";

import { USER_MEALS } from "./storageConfig";

type StoredMeals = MealTypes[];

export async function saveNewMeal(meal: MealTypes) {
  try {
    const storedMeals = await getAllMeals();

    await AsyncStorage.setItem(
      USER_MEALS,
      JSON.stringify([...storedMeals, meal])
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllMeals() {
  try {
    const storage = await AsyncStorage.getItem(USER_MEALS);
    const meals = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUnicMeals(id: string) {
  try {
    const storage = await AsyncStorage.getItem(USER_MEALS);
    const meals: StoredMeals = storage ? JSON.parse(storage) : [];
    const uniqueMeal = meals.filter((item) => item.id === id)[0];

    return uniqueMeal;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function removeMeal(id: string) {
  try {
    const storage = await AsyncStorage.getItem(USER_MEALS);
    const meals: StoredMeals = storage ? JSON.parse(storage) : [];
    const filteredMeals = meals.filter((item) => item.id !== id);

    await AsyncStorage.setItem(USER_MEALS, JSON.stringify(filteredMeals));
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function updateMeal(id: string, meal: MealTypes) {
  try {
    const storage = await AsyncStorage.getItem(USER_MEALS);
    const meals: StoredMeals = storage ? JSON.parse(storage) : [];
    const filteredMeals = meals.map((item) => {
      if (item.id === id) {
        return meal;
      } else {
        return item;
      }
    });

    await AsyncStorage.setItem(USER_MEALS, JSON.stringify(filteredMeals));
  } catch (error) {
    console.log(error);
    throw error;
  }
}
