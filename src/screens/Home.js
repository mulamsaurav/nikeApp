import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import products from '../data/products.js';

const Home = ({navigation}) => {
  const renderFlatItems = data => {
    return (
      <Pressable
        style={styles.imageContainer}
        onPress={() =>
          navigation.navigate('ProductDetailsScreen', {data: data.item})
        }>
        <Image
          source={{
            uri: data.item.image,
          }}
          style={styles.image}
        />
        {/* <Text>{data.item.name}</Text> */}
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderFlatItems}
        numColumns={2}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1},
  imageContainer: {
    width: width * 0.5,
    padding: 3,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  image: {
    width: '100%',
    // height: height * 0.,
    aspectRatio: 1,
  },
});
