import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home.js';
import ShoppingCart from './src/screens/ShoppingCart.js';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen.js';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
        {/* <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App