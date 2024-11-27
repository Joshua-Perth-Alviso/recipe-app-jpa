import { useContext } from 'react';
import { RecipesContext } from '../layouts/RecipesContext';
import RecipeCard from '../components/RecipeCard';

const FavoriteRecipes = () => {
    const { recipes } = useContext(RecipesContext);
    const favoriteRecipes = recipes.filter(recipe => recipe.isFavorite);

    return (
        <div className="m-4">
            <h2 className="text-2xl font-bold text-center mb-6">FAVORITE RECIPES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-auto place-items-center">
                {favoriteRecipes.map((recipe, index) => (
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

export default FavoriteRecipes;
