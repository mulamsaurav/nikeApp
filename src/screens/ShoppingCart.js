import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartListItem from '../component/CartListItem.js';
import {useSelector} from 'react-redux';
import {
  sumOfSubtotal,
  selectDeliveryPrice,
  selectTotalPrice,
} from '../redux/store/cartSlice.js';

const ShoppingCart = () => {
  const shoppingCartFooterList = () => {
    const subtotal = useSelector(sumOfSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const totalFee = useSelector(selectTotalPrice);
    return (
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
    );
  };
  const cartItem = useSelector(state => state?.cart?.items);
  return (
    <>
      <FlatList
        data={cartItem}
        renderItem={({item}) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartFooterList}
      />
      <View style={styles.footer}>
        <Pressable style={styles.button}>
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
