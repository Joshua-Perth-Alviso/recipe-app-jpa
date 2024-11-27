import RecipeCard from '../components/RecipeCard';
import Recipes from '../helpers/recipes.json';

const GeneralRecipes = () => {
  return (
    <div className="m-4">
      <h2 className="text-2xl font-bold text-center mb-6">ALL OF THE RECIPES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 place-items-center">
        {Recipes &&
          Recipes.map((recipe, index) => (
            <div key={index}>
              <RecipeCard
                Image={recipe.Image}
                Name={recipe.Name}
                Description={recipe.Description}
                Instruction={recipe.Instruction}
                Ingredients={recipe.Ingredients}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GeneralRecipes;
