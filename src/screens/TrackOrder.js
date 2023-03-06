import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useGetOrderQuery} from '../redux/store/apiSlice.js';

const TrackOrder = () => {
  const [search, setSearch] = useState('');
  const [orderData, setOrderData] = useState(null);

  const {data, isLoading, error} = useGetOrderQuery(search);
  console.log(data);
  const onSearch = async search => {
    // const result = await getOrder(search);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInputView}>
        <TextInput
          onChangeText={v => setSearch(v)}
          value={search}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.searchBtnView}
          onPress={() => onSearch(search.toLocaleLowerCase())}>
          <Text style={styles.searchTxt}>Search</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{JSON.stringify(data.data.items)}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TrackOrder;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    width: width * 0.95,
    borderWidth: 1,
    marginVertical: 15,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBtnView: {
    backgroundColor: '#6070ed',
    padding: 5,
    borderRadius: 10,
  },
  searchTxt: {
    color: 'white',
  },
});
