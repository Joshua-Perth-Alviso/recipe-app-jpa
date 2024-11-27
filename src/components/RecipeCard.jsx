import PropTypes from 'prop-types'
const RecipeCard = ({ Image, Name, Description, Instruction, Ingredients }) => {

  RecipeCard.propTypes = {
      Image: PropTypes.string,
      Name: PropTypes.string,
      Description: PropTypes.string,
      Instruction: PropTypes.string,
      Ingredients: PropTypes.string
  }
  
  return (
  <div>
    <div className="flex flex-col justify-start max-w-sm m-4 p-6 bg-white border border-gray-200 
      rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 
      dark:border-gray-700 dark:hover:bg-gray-500 min-h-[800px]">
      <img src={Image} alt="Card Image" />
      <h2>{Name}</h2>
      <p>{Description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {Ingredients &&
          Ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
      <h3>Instruction:</h3>
      <p>{Instruction}</p>
    </div>
  </div>
  );

  
};

export default RecipeCard;
