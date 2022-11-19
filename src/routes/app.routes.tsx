import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealTypes, StatisticsTypes } from "../types";

//screens
import Feedback from "../screens/Feedback";
import Create from "../screens/Create";
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";
import Meal from "../screens/Meal";

export interface AuthStackParamList {
  Statistics: StatisticsTypes;
  Home: undefined;
  Create: {
    mode: "edit" | "create";
    meal?: MealTypes;
  };
  Feedback: {
    diet: string;
  };
  Meal: {
    id: string;
  };
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="Create" component={Create} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="Meal" component={Meal} />
    </Navigator>
  );
}
