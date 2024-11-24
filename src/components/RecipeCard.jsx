import React from 'react';

const RecipeCard = ({ Image, Name, Description, Instruction, Ingredients }) => {
  return (
    <div className="block max-w-sm mr-2.5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-500">
        <img src = {Image}></img>
      <h2>{Name}</h2>
      <p>{Description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Ingredients && Ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instruction:</h3>
      <p>{Instruction}</p>
    </div>
  );
};

export default RecipeCard;
