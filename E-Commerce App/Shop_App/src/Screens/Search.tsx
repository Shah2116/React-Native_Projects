import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../Navigation/BottomTabNavigation';


const Search = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
