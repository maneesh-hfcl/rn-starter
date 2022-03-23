import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/homeScreen";
import ComponentScreen from "./screens/componentScreen";
import ListScreen from "./screens/listScreen";
import ImageScreen from "./screens/imageScreen";
import CounterScreen from "./screens/counterScreen";
import ColorScreen from "./screens/colorScreen";
import SquareScreen from "./screens/squareScreen";

const Stack = createNativeStackNavigator();
const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" component={HomeScreen}
        />
        <Stack.Screen 
          name="Component" component={ComponentScreen}
          options={{
            title:'Example'
          }}
        />
        <Stack.Screen 
          name="List" component={ListScreen}
          options={{
            title:'List of items'
          }}
        />
        <Stack.Screen 
          name="ImageScreen" component={ImageScreen}
          options={{
            title:'Image screen'
          }}
        />
        <Stack.Screen 
          name="CounterScreen" component={CounterScreen}
          options={{
            title:'Counter screen'
          }}
        />
        <Stack.Screen 
          name="ColorScreen" component={ColorScreen}
          options = {{
            title:'Color screen'
          }}
        />
        <Stack.Screen 
          name="SquareScreen" component={SquareScreen}
          options={{
            title:'Square screen'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;