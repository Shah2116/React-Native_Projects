import { createContext, ReactNode, useState } from "react"

 type FavoriteContextProps = {
   ids: string[];
   addFavorite: (id:string) => void;
   removeFavorite: (id: string) => void;
 }

 export const FavoriteContext = createContext<FavoriteContextProps>({
    ids: [],
    addFavorite: (id:string) => {},
    removeFavorite: (id:string) => {},
})
 
 type FavoriteContextProviderProps = {
   children: ReactNode;
 }
 export  const FavoriteContextProvider =({children}:FavoriteContextProviderProps) => {
    const [favoriteMealId, setFavoriteMealId] = useState<string[]>([])

    const addFavorite = (id:string) => {
       setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
    }

   const removeFavorite = (id:string) => {
     setFavoriteMealId((currentFavIds) => currentFavIds.filter((melas) => melas !== id));
   }
    
    //  passing props

    const valueProps = {
        ids: favoriteMealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }


 return(
    <FavoriteContext.Provider value={valueProps}>
        {children}
    </FavoriteContext.Provider>
 )
}