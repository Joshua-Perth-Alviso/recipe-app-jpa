import { useContext, useState } from 'react';
import { RecipesContext } from '../layouts/RecipesContext';
import Button from '../components/Button';

const AddRecipesForm = () => {
  const { addRecipes } = useContext(RecipesContext);

  const [newRecipe, setNewRecipes] = useState({
    Id: '',
    Name: '',
    Description: '',
    Image: '',
    Region: '',
    Type: '',
    Instruction: '',
    Ingredients: [],
    isFavorite: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipes(newRecipe);
    setNewRecipes({
      Id: '',
      Name: '',
      Description: '',
      Image: '',
      Region: '',
      Type: '',
      Instruction: '',
      Ingredients: [],
      isFavorite: false,
    });
  };

  const [ingredient, setIngredient] = useState('');

  const addIngredient = () => {
    if (ingredient.trim()) {
      setNewRecipes((prev) => ({
        ...prev,
        Ingredients: [...prev.Ingredients, ingredient],
      }));
      setIngredient('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto"
    >
      <input
        type="text"
        placeholder="Recipe Name"
        value={newRecipe.Name}
        onChange={(e) => setNewRecipes({ ...newRecipe, Name: e.target.value })}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <textarea
        placeholder="Description"
        value={newRecipe.Description}
        onChange={(e) =>
          setNewRecipes({ ...newRecipe, Description: e.target.value })
        }
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
        rows="3"
      />

      <input
        type="text"
        placeholder="Image Link"
        value={newRecipe.Image}
        onChange={(e) => setNewRecipes({ ...newRecipe, Image: e.target.value })}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <input
        type="text"
        placeholder="Region"
        value={newRecipe.Region}
        onChange={(e) => setNewRecipes({ ...newRecipe, Region: e.target.value })}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <input
        type="text"
        placeholder="Type"
        value={newRecipe.Type}
        onChange={(e) => setNewRecipes({ ...newRecipe, Type: e.target.value })}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <textarea
        placeholder="Instructions"
        value={newRecipe.Instruction}
        onChange={(e) =>
          setNewRecipes({ ...newRecipe, Instruction: e.target.value })
        }
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
        rows="4"
      />

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <Button
          label="Add Ingredient"
          type="button"
          onClick={addIngredient}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        />
      </div>

      <div>
      <ul>
            {newRecipe.Ingredients.map(
                (ing, index) => (
                    <li key={index}>
                        {ing}
                        <Button
                            label = 'REMOVE'
                            type = 'button'
                            onClick={() =>
                                setNewRecipes((prev) => ({
                                  ...prev,
                                  Ingredients: prev.Ingredients.filter((_, i) => i !== index),
                                }))
                              }
                        />
                    </li>
                )
            )}
        </ul>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          label="Submit"
          type="submit"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        />
      </div>
    </form>
  );
};

export default AddRecipesForm;
