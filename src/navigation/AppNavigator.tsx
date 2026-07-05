import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import TeamsScreens from "../screens/TeamsScreens";
import {RootStackParamList}  from "./navigationtypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E53935",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}