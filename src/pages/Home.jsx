import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RecipeContext } from '../context/RecipeContext'
import { FaUtensils, FaHeart, FaClock, FaUsers, FaStar, FaLeaf, FaFire } from 'react-icons/fa'
import { TbChefHat } from 'react-icons/tb'

const Home = () => {
  const { data } = useContext(RecipeContext)
  
  // Safety check for data
  if (!data || !Array.isArray(data)) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-teal-600 text-lg">Loading recipes...</p>
        </div>
      </div>
    )
  }
  
  // Get featured recipes (first 3 recipes)
  const featuredRecipes = data.slice(0, 3)
  
  // Calculate stats
  const totalRecipes = data.length
  const categories = [...new Set(data.map(recipe => recipe.category))].length
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl shadow-lg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-teal-100 rounded-full">
              <TbChefHat className="text-6xl text-teal-600" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-teal-800 mb-6">
            Welcome to <em>TastyNotes</em>
          </h1>
          <p className="text-xl text-teal-700 mb-8 max-w-2xl mx-auto">
            Discover amazing recipes, create your own culinary masterpieces, and share your cooking journey with our community of food lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/recipes" 
              className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaUtensils className="text-xl" />
              Browse Recipes
            </Link>
            <Link 
              to="/create-recipes" 
              className="px-8 py-4 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <TbChefHat className="text-xl" />
              Create Recipe
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-teal-100">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-teal-100 rounded-full">
              <FaUtensils className="text-3xl text-teal-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-teal-800 mb-2">{totalRecipes}</h3>
          <p className="text-teal-600 font-medium">Total Recipes</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-teal-100">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <FaLeaf className="text-3xl text-green-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-teal-800 mb-2">{categories}</h3>
          <p className="text-teal-600 font-medium">Categories</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-teal-100">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full">
              <FaFire className="text-3xl text-orange-600" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-teal-800 mb-2">24/7</h3>
          <p className="text-teal-600 font-medium">Available</p>
        </div>
      </section>

      {/* Featured Recipes Section */}
      {featuredRecipes.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-8">
            <FaStar className="text-3xl text-yellow-500" />
            <h2 className="text-3xl font-bold text-teal-800">Featured Recipes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <Link 
                key={recipe.id} 
                to={`/recipes/details/${recipe.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-teal-600">{recipe.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-3 group-hover:text-teal-600 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-teal-600 mb-4 line-clamp-2">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-teal-500">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-sm" />
                      <span>30 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-sm" />
                      <span>4 servings</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/recipes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
            >
              View All Recipes
              <FaUtensils />
            </Link>
          </div>
        </section>
      )}

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <TbChefHat className="text-6xl mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl font-bold mb-6">Ready to Start Cooking?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of home cooks who are already creating amazing dishes with our recipe collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/create-recipes"
              className="px-8 py-4 bg-white text-teal-600 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <TbChefHat className="text-xl" />
              Create Your First Recipe
            </Link>
            <Link 
              to="/favorite"
              className="px-8 py-4 bg-teal-800 text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaHeart className="text-xl" />
              View Favorites
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home