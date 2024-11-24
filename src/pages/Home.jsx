import React from 'react'
import RecipeCard from '../components/RecipeCard'
import Recipes from '../helpers/recipes.json'

const Home = () => {
  return (
    <div className='m-2'>
      {Recipes && Recipes.map((recipes, index) => {
        return(
          <div className='inline-block ' key={index}>
            <RecipeCard
              Image = {recipes.Image}
              Name = {recipes.Name}
              Description = {recipes.Description}
              Instruction = {recipes.Instruction}
              Ingredients = {recipes.Ingredients}
            />
          </div>
        )
      })
      }
    </div>
  )
}

export default Home
