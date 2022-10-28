import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Statistics"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
    </Navigator>
  );
}
