import { useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from '../components/MealList/MealItem';
import { MEALS,CATEGORIES } from '../assests/data/data';
import React from 'react';
import MealList from '../components/MealList';



function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
console.log(catId,"catidr")
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
 
  return (
   <MealList displayedMeals={displayedMeals} />
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});