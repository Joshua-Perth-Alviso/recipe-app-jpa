import {createContext, useState} from 'react'
import Recipes from '../helpers/recipes.json'

export const RecipesContext = createContext();

// eslint-disable-next-line react/prop-types
const RecipesProvider = ({children}) => {
    const [recipes, setRecipes] = useState(Recipes);

    return (
        <RecipesContext.Provider value={{recipes, setRecipes}}>
            {children}
        </RecipesContext.Provider>
        
    )
}

export default RecipesProvider