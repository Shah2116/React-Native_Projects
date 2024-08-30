import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealItem from './MealList/MealItem';

const MealList = ({displayedMeals}) => {
    
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});