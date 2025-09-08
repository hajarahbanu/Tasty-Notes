import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'
import { FaUtensils, FaSearch, FaFilter } from 'react-icons/fa'

const Recipes = () => {
  const {data} = useContext(RecipeContext)
  
  // Safety check for data
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-teal-600 text-lg">Loading recipes...</p>
        </div>
      </div>
    )
  }
  
  const renderrecipes = data.map((recipe)=>(
   <RecipeCard key={recipe.id} recipe={recipe} />
  ))
  
  return (
    <div className='space-y-8'>
      {/* Header Section */}
      <div className='text-center'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          <FaUtensils className='text-4xl text-teal-600' />
          <h1 className='text-4xl font-bold text-teal-800'>All Recipes</h1>
        </div>
        <p className='text-xl text-teal-600 max-w-2xl mx-auto'>
          Discover our collection of delicious recipes from around the world. 
          From quick snacks to elaborate meals, find your next culinary adventure.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className='bg-white rounded-xl shadow-lg p-6 border border-teal-100'>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='flex-1 relative'>
            <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400' />
            <input 
              type='text' 
              placeholder='Search recipes...' 
              className='w-full pl-12 pr-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
            />
          </div>
          <div className='flex gap-3'>
            <button className='flex items-center gap-2 px-4 py-3 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors duration-200'>
              <FaFilter className='text-sm' />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Recipe Count */}
      <div className='flex items-center justify-between'>
        <p className='text-teal-600 font-medium'>
          {data.length} {data.length === 1 ? 'recipe' : 'recipes'} found
        </p>
      </div>

      {/* Recipes Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {data.length > 0 ? renderrecipes : (
          <div className='col-span-full text-center py-16'>
            <FaUtensils className='text-6xl text-teal-300 mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-teal-600 mb-2'>No recipes found!</h3>
            <p className='text-teal-500 mb-6'>Start by creating your first recipe or check back later for new additions.</p>
            <button className='px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200'>
              Create Recipe
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Recipes