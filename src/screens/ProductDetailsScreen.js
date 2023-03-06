import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {cartSlice} from '../redux/store/cartSlice.js';
import {useGetProductQuery} from '../redux/store/apiSlice.js';

const ProductDetailsScreen = ({route}) => {
  // const product = useSelector(state => state?.products?.selectedProduct);
  const {data, isLoading, error} = useGetProductQuery(route?.params?.id);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error occur during fetching data {error.error}</Text>;
  }
  const product = data?.data;
  const dispatch = useDispatch();
  const renderFlatItems = data => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data?.item,
          }}
          style={styles.image}
        />
      </View>
    );
  };

  const addCart = () => {
    dispatch(cartSlice.actions.addCartItem({product}));
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Image Carousel */}
      <FlatList
        data={product?.images}
        renderItem={renderFlatItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
      />
      <ScrollView style={styles.scrollViewContainer}>
        {/* Title */}

        <Text style={styles.titleText}>{product?.name}</Text>

        {/* Price */}

        <Text style={styles.priceText}>$ {product?.price}</Text>
        {/* Description */}

        <Text style={styles.descText}>{product?.description}</Text>
      </ScrollView>
      {/* Add to cart button */}

      <Pressable style={styles.btnView} onPress={addCart}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    // margin: 5,
  },
  imageContainer: {
    width: width,
    backgroundColor: 'slyblue',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  scrollViewContainer: {
    borderColor: 'grey',
    borderTopWidth: 1.5,
    margin: 15,
    // marginBottom: 15,
  },
  textView: {
    lineHeight: 30,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
  },
  descText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    marginTop: 10,
  },
  btnView: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: height * 0.195,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
