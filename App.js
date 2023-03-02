import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home.js';
import ShoppingCart from './src/screens/ShoppingCart.js';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen.js';
import Feather from 'react-native-vector-icons/Feather.js';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{contentStyle: {backgroundColor: 'whhite'}}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('ShoppingCart')}
                style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Feather name="shopping-cart" size={18} color="gray" />
                <Text style={styles.cartItems}>1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  cartItems: {
    fontSize: 16,
    marginLeft: 5,
    color: 'black',
  },
});
