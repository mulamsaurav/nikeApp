import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  Text,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../redux/store/productsSlice.js';
import {useGetProductsQuery} from '../redux/store/apiSlice.js';

const Home = ({navigation}) => {
  //redux
  // const products = useSelector(state => state.products?.products);

  // apicall using redux Query Toolkit
  const {data, isLoading, error} = useGetProductsQuery();
  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Error occur during fetching data {error.error}</Text>;
  }
  const products = data?.data;

  // const dispatch = useDispatch();
  const renderFlatItems = data => {
    return (
      <Pressable
        style={styles.imageContainer}
        onPress={() => {
          //update state and dispatch
          // dispatch(productsSlice.actions.setSelectedProduct(data.item._id));

          navigation.navigate('ProductDetailsScreen', {id: data.item._id});
        }}>
        <Image
          source={{
            uri: data.item.image,
          }}
          style={styles.image}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderFlatItems}
        numColumns={2}
        keyExtractor={item => item?._id}
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
