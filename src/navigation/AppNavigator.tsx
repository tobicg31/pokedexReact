import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import TeamsScreens from "../screens/TeamsScreens";
import {RootStackParamList}  from "./navigationtypes";
import TeamDetailScreen from "../screens/TeamDetailScreen";
import { colors } from "../styles/theme";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
          name="Teams"
          component={TeamsScreens}
          options={{
            title: "Mis Equipos",
          }}
        />
        <Stack.Screen
            name="TeamDetail"
            component={TeamDetailScreen}
            options={{
                title: "Equipo"
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}