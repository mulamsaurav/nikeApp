import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home.js';
import ShoppingCart from '../screens/ShoppingCart.js';
import ProductDetailsScreen from '../screens/ProductDetailsScreen.js';
import Feather from 'react-native-vector-icons/Feather.js';
import {useSelector} from 'react-redux';
import {selectedAddtoCartItems} from '../redux/store/cartSlice.js';
import TrackOrder from '../screens/TrackOrder.js';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const numberOfItems = useSelector(selectedAddtoCartItems);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{contentStyle: {backgroundColor: 'white'}}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.navigate('Track Order')}
                style={{justifyContent: 'center'}}>
                <Feather name="truck" size={18} color="gray" />
              </Pressable>
            ),

            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('ShoppingCart')}
                style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Feather name="shopping-cart" size={18} color="gray" />
                <Text style={styles.cartItems}>{numberOfItems}</Text>
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
        <Stack.Screen name="Track Order" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
const styles = StyleSheet.create({
  cartItems: {
    fontSize: 16,
    marginLeft: 5,
    color: 'black',
  },
});
