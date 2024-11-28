import { useContext } from 'react';
import { RecipesContext } from '../layouts/RecipesContext';
import RecipeCard from '../components/RecipeCard';

const GeneralRecipes = () => {
    const { recipes, deleteRecipe, toggleFavorite } = useContext(RecipesContext);
  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold text-center mb-6">ALL OF THE RECIPES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        {recipes &&
          recipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard
                Image={recipe.Image}
                Name={recipe.Name}
                Description={recipe.Description}
                isExpanded = {false}
                onDelete={() => deleteRecipe(recipe.Name)}
                isFavorite = {recipe.isFavorite}
                onToggleFavorite = {() => toggleFavorite(recipe.Name)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GeneralRecipes;
