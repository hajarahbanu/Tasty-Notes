import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { FaHeart, FaSearch, FaFilter, FaTrash } from 'react-icons/fa'

const Fav = () => { 
  const favorite = JSON.parse(localStorage.getItem("fav") || "[]")
  const renderrecipes = favorite.map((recipe)=>(
   <RecipeCard key={recipe.id} recipe={recipe} />
  ))
  
  return (
    <div className='space-y-8'>
      {/* Header Section */}
      <div className='text-center'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          {/* <FaHeart className='text-4xl text-red-500' /> */}
          <h1 className='text-4xl font-bold text-teal-800'>My Favorites</h1>
        </div>
        <p className='text-xl text-teal-600 max-w-2xl mx-auto'>
          Your personal collection of beloved recipes. Save and organize your favorite dishes for easy access.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className='bg-white rounded-xl shadow-lg p-6 border border-teal-100'>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between'>
          <div className='flex-1 relative'>
            <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-400' />
            <input 
              type='text' 
              placeholder='Search your favorites...' 
              className='w-full pl-12 pr-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
            />
          </div>
          <div className='flex gap-3'>
            <button className='flex items-center gap-2 px-4 py-3 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors duration-200'>
              <FaFilter className='text-sm' />
              Filter
            </button>
            {favorite.length > 0 && (
              <button className='flex items-center gap-2 px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200'>
                <FaTrash className='text-sm' />
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Favorites Count */}
      <div className='flex items-center justify-between'>
        <p className='text-teal-600 font-medium'>
          {favorite.length} {favorite.length === 1 ? 'favorite' : 'favorites'} saved
        </p>
      </div>

      {/* Favorites Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {favorite.length > 0 ? renderrecipes : (
          <div className='col-span-full text-center py-16'>
            <div className='bg-red-50 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center'>
              <FaHeart className='text-6xl text-red-300' />
            </div>
            <h3 className='text-2xl font-bold text-teal-600 mb-2'>No favorites yet!</h3>
            <p className='text-teal-500 mb-6'>Start exploring recipes and add them to your favorites to see them here.</p>
            <button className='px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200'>
              Browse Recipes
            </button>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      {favorite.length > 0 && (
        <div className='bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-8 text-center'>
          <h3 className='text-2xl font-bold text-teal-800 mb-4'>Love Your Collection?</h3>
          <p className='text-teal-600 mb-6'>Share your favorite recipes with friends and family!</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200'>
              Share Collection
            </button>
            <button className='px-6 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-200'>
              Export Recipes
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Fav