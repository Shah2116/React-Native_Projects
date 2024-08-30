import {View } from 'react-native'
import React, { useContext } from 'react'
import MealList from '../components/MealList'
import { FavoriteContext } from '../store/favorites-context'
import {MEALS} from '../assests/data/data'

const FavoritesScreen = () => {

  const favoriteMealsContext = useContext(FavoriteContext)
  console.log("ContextApi:", favoriteMealsContext)
  const favoriteMeals  = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id))
  console.log("fav:", favoriteMeals)

  return (
    <View>
     <MealList displayedMeals={favoriteMeals} />
    </View>
  )
}

export default FavoritesScreen