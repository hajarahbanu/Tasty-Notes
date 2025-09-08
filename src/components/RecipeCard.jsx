import React from 'react'
import { Link } from 'react-router-dom'
import { FaClock, FaUsers, FaUserTie, FaArrowRight } from 'react-icons/fa'

const RecipeCard = (props) => {
  const {id, image, title, description, ingredients, category} = props.recipe;

  return (
    <Link 
      to={`/recipes/details/${id}`} 
      className='group block w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2'
    >
      <div className='relative overflow-hidden'>
        <img 
          src={image} 
          alt={title} 
          className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
        />
        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm'>
          <span className='text-sm font-medium text-teal-600'>{category}</span>
        </div>
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
      
      <div className='p-6'>
        <div className='flex items-start justify-between mb-3'>
          <h3 className='text-xl font-bold text-teal-800 group-hover:text-teal-600 transition-colors duration-200 line-clamp-2'>
            {title}
          </h3>
          <FaArrowRight className='text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2 flex-shrink-0 mt-1' />
        </div>
        
        <p className='text-teal-600 text-sm mb-4 line-clamp-3 leading-relaxed'>
          {description}
        </p>
        
        <div className='flex flex-wrap items-center gap-3 text-sm text-teal-700 mb-4 border-t border-teal-100 pt-4 mt-2'>
          <div className='flex items-center gap-2 bg-teal-50 rounded-full px-3 py-1'>
            <FaClock className='text-sm' />
            <span>30 min</span>
          </div>
          <div className='flex items-center gap-2 bg-teal-50 rounded-full px-3 py-1'>
            <FaUsers className='text-sm' />
            <span>4 servings</span>
          </div>
          <div className='flex items-center gap-2 bg-teal-50 rounded-full px-3 py-1'>
            <FaUserTie className='text-sm' />
            <span>{ingredients?.length || 0} ingredients</span>
          </div>
        </div>
        
        <div className='flex items-center justify-between'>
          <span className='text-xs text-teal-400 font-medium'>
            Click to view recipe
          </span>
          <div className='w-2 h-2 bg-teal-400 rounded-full group-hover:bg-teal-600 transition-colors duration-200'></div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard