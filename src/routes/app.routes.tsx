import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";
import { StatisticsTypes } from "../types";

export interface AuthStackParamList {
  Statistics: StatisticsTypes;
  Home: undefined;
  New: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  );
}
