import { nanoid } from 'nanoid'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { RecipeContext } from '../context/RecipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FaUserTie, FaImage, FaUtensils, FaFileAlt, FaList, FaClipboardList, FaTag, FaSave } from 'react-icons/fa'

const Create = () => {
  const navigate = useNavigate()
  const {data, setdata} = useContext(RecipeContext)
  const {register, handleSubmit, reset, formState: { errors }} = useForm()  

  const submitHandler = (recipe)=>{
    recipe.id = nanoid()
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)
    localStorage.setItem("recipes", JSON.stringify(copydata))
    toast.success("New recipe added!")
    reset()
    navigate("/recipes")
  }

  return (
    <div className='max-w-4xl mx-auto space-y-8'>
      {/* Header Section */}
      <div className='text-center'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          <FaUserTie className='text-4xl text-teal-600' />
          <h1 className='text-4xl font-bold text-teal-800'>Create New Recipe</h1>
        </div>
        <p className='text-xl text-teal-600 max-w-2xl mx-auto'>
          Share your culinary masterpiece with the community. Fill in the details below to create your recipe.
        </p>
      </div>

      {/* Form Section */}
      <div className='bg-white rounded-2xl shadow-lg p-8 border border-teal-100'>
        <form onSubmit={handleSubmit(submitHandler)} className='space-y-6'>
          {/* Image URL */}
          <div>
            <label className='flex items-center gap-2 text-lg font-semibold text-teal-800 mb-3'>
              <FaImage className='text-teal-600' />
              Recipe Image
            </label>
            <input
              className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200'
              {...register("image", { required: "Image URL is required" })}
              type="url"
              placeholder='Paste the URL of the image'
            />
            {errors.image && <small className='text-red-500 mt-1 block'>{errors.image.message}</small>}
          </div>

          {/* Recipe Title */}
          <div>
            <label className='flex items-center gap-2 text-lg font-semibold text-teal-800 mb-3'>
              <FaUtensils className='text-teal-600' />
              Recipe Title
            </label>
            <input
              className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200'
              {...register("title", { required: "Recipe title is required" })}
              type="text"
              placeholder='Enter a catchy recipe title'
            />
            {errors.title && <small className='text-red-500 mt-1 block'>{errors.title.message}</small>}
          </div>

          {/* Description */}
          <div>
            <label className='flex items-center gap-2 text-lg font-semibold text-teal-800 mb-3'>
              <FaFileAlt className='text-teal-600' />
              Description
            </label>
            <textarea
              className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none'
              rows={4}
              {...register("description", { required: "Description is required" })}
              placeholder='Write a brief description of your recipe...'
            />
            {errors.description && <small className='text-red-500 mt-1 block'>{errors.description.message}</small>}
          </div>

          {/* Ingredients */}
          <div>
            <label className='flex items-center gap-2 text-lg font-semibold text-teal-800 mb-3'>
              <FaList className='text-teal-600' />
              Ingredients
            </label>
            <textarea
              className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none'
              rows={6}
              {...register("ingredients", { required: "Ingredients are required" })}
              placeholder='List all ingredients (one per line or separated by commas)...'
            />
            {errors.ingredients && <small className='text-red-500 mt-1 block'>{errors.ingredients.message}</small>}
          </div>

          {/* Instructions */}
          <div>
            <label className='flex items-center gap-2 text-lg font-semibold text-teal-800 mb-3'>
              <FaClipboardList className='text-teal-600' />
              Instructions
            </label>
            <textarea
              className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-none'
              rows={8}
              {...register("instructions", { required: "Instructions are required" })}
              placeholder='Write step-by-step cooking instructions...'
            />
            {errors.instructions && <small className='text-red-500 mt-1 block'>{errors.instructions.message}</small>}
          </div>

          {/* Category */}
          <div>
            <label className='flex items-center gap-2 text-lg font-semibold text-teal-800 mb-3'>
              <FaTag className='text-teal-600' />
              Category
            </label>
            <select
              className='w-full p-4 border-2 border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200'
              {...register("category", { required: "Category is required" })}
            >
              <option value="">Select a category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Main Course">Main Course</option>
            </select>
            {errors.category && <small className='text-red-500 mt-1 block'>{errors.category.message}</small>}
          </div>

          {/* Submit Button */}
          <div className='flex justify-center pt-6'>
            <button 
              type='submit'
              className='flex items-center gap-3 px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl'
            >
              <FaSave className='text-xl' />
              Save Recipe
            </button>
          </div>
        </form>
      </div>

      {/* Tips Section */}
      <div className='bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6'>
        <h3 className='text-xl font-bold text-teal-800 mb-4 flex items-center gap-2'>
          <FaUserTie className='text-teal-600' />
          Recipe Creation Tips
        </h3>
        <ul className='space-y-2 text-teal-600'>
          <li className='flex items-start gap-2'>
            <span className='text-teal-500 mt-1'>•</span>
            <span>Use high-quality images that showcase your dish</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-teal-500 mt-1'>•</span>
            <span>Be specific with measurements and cooking times</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-teal-500 mt-1'>•</span>
            <span>Include helpful tips and variations in your instructions</span>
          </li>
          <li className='flex items-start gap-2'>
            <span className='text-teal-500 mt-1'>•</span>
            <span>Choose the most appropriate category for better discoverability</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Create