import React from 'react';
import AddRecipesForm from '../layouts/AddRecipesForm';

const RecipeForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <AddRecipesForm />
      </div>
    </div>
  );
};

export default RecipeForm;
