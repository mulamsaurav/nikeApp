import {Alert, FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartListItem from '../component/CartListItem.js';
import {useDispatch, useSelector} from 'react-redux';
import {
  sumOfSubtotal,
  selectDeliveryPrice,
  selectTotalPrice,
  cartSlice,
} from '../redux/store/cartSlice.js';
import {useCreateOrderMutation} from '../redux/store/apiSlice.js';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state?.cart?.items);
  const dispatch = useDispatch();

  console.log(cartItems);
  const subtotal = useSelector(sumOfSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const totalFee = useSelector(selectTotalPrice);
  const [createOrder, {data, isLoading, error}] = useCreateOrderMutation();
  const onCreateOrder = async () => {
    const result = await createOrder({
      items: cartItems,
      subtotal,
      deliveryFee,
      totalFee,
    });

    if (result.data?.status === 'OK') {
      console.log(result.data);
      Alert.alert(
        'Order has been submitted',
        `Your order reference is: ${result.data.data.ref}`,
      );
      dispatch(cartSlice.actions.clear());
    }
  };

  const shoppingCartFooterList = () => {
    return cartItems !== [] ? (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>{deliveryFee} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>{totalFee} US$</Text>
        </View>
      </View>
    ) : null;
  };
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartFooterList}
        ListEmptyComponent={() => (
          <View>
            <Text style={{alignSelf: 'center'}}>
              You don't have any product
            </Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={() => onCreateOrder()}>
          <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
      </View>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    padding: 20,
  },

  button: {
    width: '100%',
    backgroundColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
