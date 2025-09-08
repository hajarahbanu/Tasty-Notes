import React, { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { RecipeContext } from '../context/RecipeContext';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { FaHeart, FaEdit, FaTrash, FaClock, FaUsers, FaUserTie, FaArrowLeft, FaSave, FaTimes } from 'react-icons/fa';

const SingleRecipe = () => {
    const {data, setdata} = useContext(RecipeContext)
    const params = useParams();
    const recipe = data.find((recipe)=> params.id == recipe.id)

    useEffect(()=>{
        console.log("SingleRecipe.jsx mounted")
        return ()=>{
          console.log("SingleRecipe.jsx unmounted")
        }
       },[])

    // details for updation form
        const navigate = useNavigate()
        const {register, handleSubmit, reset} = useForm({defaultValues: {
            title: recipe?.title,
            image : recipe?.image,
            description:recipe?.description,
            ingredients: recipe?.ingredients,
            category: recipe?.category

        }})  

  const updateHandler = (recipe)=>{
    // logic for updating the recipe
    const index = data.findIndex((recipe)=> params.id == recipe.id)
    const copydata = [...data]
    copydata[index]= {...copydata[index], ...recipe}
    setdata(copydata)
    // to store in local storage which only takes values in string
    localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success("updated successfully")
  }

  const deleteHandler = ()=>{
        const filterdata = data.filter(r => r.id != params.id);
        setdata(filterdata)
        // to store in local storage which only takes values in string
        localStorage.setItem("recipes", JSON.stringify(filterdata))
        toast.success("recipe deleted!")
        navigate("/recipes")
  }

  const [favorite, setfavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  )
  const favHandler = ()=>{
    let copyfav = [...favorite]
    copyfav.push(recipe)
    setfavorite(copyfav)
    localStorage.setItem("fav", JSON.stringify(copyfav))
  }
  const unfavHandler = ()=>{
    const filterfav = favorite.filter((f)=> f.id != recipe?.id )
    setfavorite(filterfav)
    localStorage.setItem("fav", JSON.stringify(filterfav))
  }

  const [isEditing, setIsEditing] = useState(false);

  return recipe ? (
    <div className='space-y-8'>
      {/* Header with back button and favorite */}
      <div className='flex items-center justify-between'>
        <button 
          onClick={() => navigate('/recipes')}
          className='flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-700 rounded-lg hover:bg-teal-200 transition-colors duration-200'
        >
          <FaArrowLeft className='text-lg' />
          Back to Recipes
        </button>
        
        <div className='flex items-center gap-4'>
          <button
            onClick={isEditing ? () => setIsEditing(false) : () => setIsEditing(true)}
            className='flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200'
          >
            <FaEdit className='text-lg' />
            {isEditing ? 'Cancel Edit' : 'Edit Recipe'}
          </button>
          
          {favorite.find((f) => f.id == recipe?.id) ? 
            <button onClick={unfavHandler} className='flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200'>
              <FaHeart className='text-lg fill-current' />
              Remove from Favorites
            </button>
            :
            <button onClick={favHandler} className='flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200'>
              <FaHeart className='text-lg' />
              Add to Favorites
            </button>
          }

          <button 
            type='button'
            onClick={deleteHandler}
            className='flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200'
          >
            <FaTrash className='text-lg' />
            Delete
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Recipe Details */}
        <div className='space-y-6'>
          <div className='bg-white rounded-2xl shadow-lg p-8 border border-teal-100'>
            <div className='relative'>
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className='w-full h-80 object-cover rounded-xl mb-6' 
              />
              <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm'>
                <span className='text-sm font-medium text-teal-600'>{recipe.category}</span>
              </div>
            </div>
            
            <h1 className='text-4xl font-bold text-teal-800 mb-4'>{recipe.title}</h1>
            <p className='text-lg text-teal-600 leading-relaxed mb-6'>{recipe.description}</p>
            
            <div className='flex flex-wrap gap-4 mb-6'>
              <div className='flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-2'>
                <FaClock className='text-sm' />
                <span>30 min</span>
              </div>
              <div className='flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-2'>
                <FaUsers className='text-sm' />
                <span>4 servings</span>
              </div>
              <div className='flex items-center gap-2 bg-teal-50 text-teal-700 rounded-full px-4 py-2'>
                <FaUserTie className='text-sm' />
                <span>{recipe.ingredients?.length || 0} ingredients</span>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className='bg-white rounded-2xl shadow-lg p-8 border border-teal-100'>
            <h2 className='text-2xl font-bold text-teal-800 mb-6'>Ingredients</h2>
            <ul className='space-y-3'>
              {Array.isArray(recipe.ingredients) ? recipe.ingredients.map((ingredient, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0'></div>
                  <span className='text-teal-700'>{ingredient}</span>
                </li>
              )) : (
                <li className='text-teal-600'>{recipe.ingredients}</li>
              )}
            </ul>
          </div>

          {/* Instructions */}
          <div className='bg-white rounded-2xl shadow-lg p-8 border border-teal-100'>
            <h2 className='text-2xl font-bold text-teal-800 mb-6'>Instructions</h2>
            <ol className='space-y-4'>
              {Array.isArray(recipe.instructions) ? recipe.instructions.map((instruction, index) => (
                <li key={index} className='flex items-start gap-4'>
                  <div className='bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0'>
                    {index + 1}
                  </div>
                  <span className='text-teal-700 leading-relaxed'>{instruction}</span>
                </li>
              )) : (
                <li className='text-teal-600'>{recipe.instructions}</li>
              )}
            </ol>
          </div>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <div className='bg-white rounded-2xl shadow-lg p-8 border border-teal-100'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-2xl font-bold text-teal-800'>Edit Recipe</h2>
              <button
                onClick={() => setIsEditing(false)}
                className='p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200'
              >
                <FaTimes className='text-xl' />
              </button>
            </div>
            
            <form onSubmit={handleSubmit(updateHandler)} className='space-y-6'>
              {/* Image URL */}
              <div>
                <label className='block text-sm font-semibold text-teal-800 mb-2'>Recipe Image</label>
                <input
                  className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200'
                  {...register("image", { required: "Image URL is required" })}
                  type="url"
                  placeholder='Paste the URL of the image'
                />
              </div>

              {/* Recipe Title */}
              <div>
                <label className='block text-sm font-semibold text-teal-800 mb-2'>Recipe Title</label>
                <input
                  className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200'
                  {...register("title", { required: "Recipe title is required" })}
                  type="text"
                  placeholder='Enter recipe title'
                />
              </div>

              {/* Description */}
              <div>
                <label className='block text-sm font-semibold text-teal-800 mb-2'>Description</label>
                <textarea
                  className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none'
                  rows={4}
                  {...register("description", { required: "Description is required" })}
                  placeholder='Write a brief description...'
                />
              </div>

              {/* Ingredients */}
              <div>
                <label className='block text-sm font-semibold text-teal-800 mb-2'>Ingredients</label>
                <textarea
                  className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none'
                  rows={6}
                  {...register("ingredients", { required: "Ingredients are required" })}
                  placeholder='List all ingredients (one per line)...'
                />
              </div>

              {/* Instructions */}
              <div>
                <label className='block text-sm font-semibold text-teal-800 mb-2'>Instructions</label>
                <textarea
                  className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none'
                  rows={8}
                  {...register("instructions", { required: "Instructions are required" })}
                  placeholder='Write step-by-step instructions...'
                />
              </div>

              {/* Category */}
              <div>
                <label className='block text-sm font-semibold text-teal-800 mb-2'>Category</label>
                <select
                  className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200'
                  {...register("category", { required: "Category is required" })}
                >
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Beverage">Beverage</option>
                  <option value="Appetizer">Appetizer</option>
                  <option value="Main Course">Main Course</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className='flex gap-4 pt-6'>
                <button 
                  type='submit'
                  className='flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200'
                >
                  <FaSave className='text-lg' />
                  Update Recipe
                </button>
                <button 
                  type='button'
                  onClick={deleteHandler}
                  className='flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200'
                >
                  <FaTrash className='text-lg' />
                  Delete Recipe
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center min-h-[400px]'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4'></div>
        <p className='text-teal-600 text-lg'>Loading recipe...</p>
      </div>
    </div>
  )
}

export default SingleRecipe