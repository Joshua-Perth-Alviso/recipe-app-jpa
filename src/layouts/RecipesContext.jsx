import {createContext, useState} from 'react'
import Recipes from '../helpers/recipes.json'

export const RecipesContext = createContext();

// eslint-disable-next-line react/prop-types
const RecipesProvider = ({children}) => {
    const [recipes, setRecipes] = useState(Recipes);

    const addRecipes = (newRecipe) => {
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe])
    }

    const deleteRecipe = (name) => {
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.Name !== name))
    }

    const toggleFavorite = (name) => {
        setRecipes((prevRecipes) => prevRecipes.map(
            (recipe) => recipe.Name === name ? {...recipe, isFavorite: !recipe.isFavorite} : recipe
        ))
    }

    return (
        <RecipesContext.Provider value={{recipes, addRecipes, deleteRecipe, toggleFavorite}}>
            {children}
        </RecipesContext.Provider>
        
    )
}

export default RecipesProvider