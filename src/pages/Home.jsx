import RecipesProvider from '../layouts/RecipesContext'
import FavoriteRecipes from '../layouts/FavoriteRecipes'
import GeneralRecipes from '../layouts/GeneralRecipes'
import RecipeForm from '../components/RecipeForm'

const Home = () => {
  return (
    <RecipesProvider>
      <FavoriteRecipes/>
      <GeneralRecipes/>
      <RecipeForm/>
    </RecipesProvider>


  )
}

export default Home
