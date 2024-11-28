import PropTypes from 'prop-types'
import Button from './Button';

const RecipeCard = ({ Image, Name, Description, Instruction, Ingredients, 
  isExpanded, isFavorite, onDelete, onToggleFavorite}) => {


  return (
  <div>
    <div className="flex flex-col justify-start max-w-sm m-4 p-6 bg-white   border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-500 min-h-[600px]">
      <img src={Image} alt="Card Image" />
      <h2>{Name}</h2>
      <p>{Description}</p>
      {isExpanded && (
        <>
          <h3>Ingredients:</h3>
          <ul>
            {Ingredients &&
              Ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
          <h3>Instruction:</h3>
          <p>{Instruction}</p>
        </>
      )
      }

      {isFavorite ? (
        <>
          <Button 
            label='REMOVE FAVORITE'
            onClick={onToggleFavorite}
            className='bg-pink-500 hover:bg-pink-600 transition'
          />
        </>
      ) : (
        <>
          <Button 
            label='ADD AS FAVORITE'
            onClick={onToggleFavorite}
            className='bg-pink-500 hover:bg-pink-600 transition'
          />
        </>
      )}
        {onDelete && (
          <>
            <Button 
              label='DELETE'
              onClick={onDelete}
              className='bg-red-500 hover:bg-red-600 transition'
            />
          </>
        )}
    </div>
  </div>
  );

};

RecipeCard.propTypes = {
  Image: PropTypes.string,
  Name: PropTypes.string,
  Description: PropTypes.string,
  Instruction: PropTypes.string,
  Ingredients: PropTypes.string,
  isExpanded: PropTypes.bool,
  isFavorite: PropTypes.bool
}

export default RecipeCard;
