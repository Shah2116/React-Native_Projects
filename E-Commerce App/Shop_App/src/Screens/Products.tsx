import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

import { RootStackParamList } from '../Navigation/BottomTabNavigation';



const Products = () => {
  return (
    <View>
      <Text>Products</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
