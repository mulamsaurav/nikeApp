import {
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
import {useRoute} from '@react-navigation/native';

const ProductDetailsScreen = () => {
  const route = useRoute();
  const imageCourselData = route.params?.data?.images;
  const productData = route.params?.data;

  const renderFlatItems = data => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data.item,
          }}
          style={styles.image}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Image Carousel */}
      <FlatList
        data={imageCourselData}
        renderItem={renderFlatItems}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
      />
      <ScrollView style={styles.scrollViewContainer}>
        {/* Title */}

        <Text style={styles.titleText}>{productData?.name}</Text>

        {/* Price */}

        <Text style={styles.priceText}>$ {productData?.price}</Text>
        {/* Description */}

        <Text style={styles.descText}>{productData?.description}</Text>
      </ScrollView>
      {/* Add to cart button */}

      <Pressable style={styles.btnView}>
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
    bottom: height * 0.12,
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
