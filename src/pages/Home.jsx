import RecipesProvider from '../layouts/RecipesContext'
import FavoriteRecipes from '../layouts/FavoriteRecipes'
import GeneralRecipes from '../layouts/GeneralRecipes'

const Home = () => {
  return (
    <>
      <RecipesProvider>
        <FavoriteRecipes/>
        <GeneralRecipes/>
      </RecipesProvider>
    </>
  )
}

export default Home
