// PLUGINS IMPORTS //
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

// COMPONENTS IMPORTS //
import Menu from "./Menu"
import CandleGraph from "./screens/CandleGraph"
import LineGraph from "./screens/LineGraph"
import GraphLib from "./screens/GraphsLib"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

export const screens = [
  {
    name: "CandleGraph",
    component: CandleGraph,
  },
  {
    name: "LineGraph",
    component: LineGraph,
  },
  {
    name: "GraphLib",
    component: GraphLib,
  },
]

const Stack = createStackNavigator()
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: true }}
        />
        {screens.map((item) => (
          <Stack.Screen name={item.name} component={item.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
