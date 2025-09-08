import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUtensils, FaPlus, FaHeart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100 p-4 mb-10'>
      <div className='flex items-center justify-center gap-x-8 text-lg font-semibold'>
        <NavLink 
          to="/"
          className={(e) => 
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              e.isActive 
                ? "text-teal-800 bg-teal-100 shadow-md" 
                : "text-teal-600 hover:text-teal-800 hover:bg-teal-50"
            }`
          }
        >
          <FaHome className="text-xl" />
          Home
        </NavLink>
        
        <NavLink 
          to="/recipes"
          className={(e) => 
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              e.isActive 
                ? "text-teal-800 bg-teal-100 shadow-md" 
                : "text-teal-600 hover:text-teal-800 hover:bg-teal-50"
            }`
          }
        >
          <FaUtensils className="text-xl" />
          Recipes
        </NavLink>
        
        
        
        <NavLink 
          to="/create-recipes"
          className={(e) => 
            `flex items-center gap-2 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-md hover:shadow-lg ${
              e.isActive ? "bg-teal-700 shadow-lg" : ""
            }`
          }
        >
          <FaPlus className="text-lg" />
          Create Recipe
        </NavLink>
        
        <NavLink 
          to="/favorite"
          className={(e) => 
            `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              e.isActive 
                ? "text-teal-800 bg-teal-100 shadow-md" 
                : "text-teal-600 hover:text-teal-800 hover:bg-teal-50"
            }`
          }
        >
          <FaHeart className="text-xl" />
          Favorites
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar