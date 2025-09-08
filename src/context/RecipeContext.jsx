import React, { createContext, useEffect, useState } from 'react'


export const RecipeContext = createContext(null)
const RecipeProvider = (props) => {

  const [data, setdata] = useState([
    {
      "id": "sample-1",
      "title": "Classic Margherita Pizza",
      "ingredients": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "image": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&h=300&fit=crop",
      "category": "Dinner",
      "description": "A classic Italian pizza with fresh tomatoes, mozzarella, and basil. Simple yet delicious, this pizza showcases the beauty of quality ingredients."
    },
    {
      "id": "sample-2",
      "title": "Chocolate Chip Cookies",
      "ingredients": [
        "2 1/4 cups all-purpose flour",
        "1 tsp baking soda",
        "1 tsp salt",
        "1 cup butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup brown sugar",
        "2 large eggs",
        "2 tsp vanilla extract",
        "2 cups chocolate chips"
      ],
      "instructions": [
        "Preheat oven to 375°F (190°C).",
        "Mix flour, baking soda, and salt in a bowl.",
        "Cream butter and sugars until fluffy.",
        "Beat in eggs and vanilla.",
        "Gradually blend in flour mixture.",
        "Stir in chocolate chips.",
        "Drop rounded tablespoons onto ungreased cookie sheets.",
        "Bake 9-11 minutes until golden brown.",
        "Cool on baking sheet for 2 minutes before removing."
      ],
      "image": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&h=300&fit=crop",
      "category": "Dessert",
      "description": "Soft and chewy chocolate chip cookies that are perfect for any occasion. These classic cookies are sure to be a hit with everyone."
    },
    {
      "id": "sample-3",
      "title": "Grilled Salmon with Lemon",
      "ingredients": [
        "4 salmon fillets",
        "2 lemons",
        "3 tbsp olive oil",
        "2 cloves garlic, minced",
        "1 tsp dried oregano",
        "Salt and pepper to taste",
        "Fresh dill for garnish"
      ],
      "instructions": [
        "Preheat grill to medium-high heat.",
        "Mix olive oil, garlic, oregano, salt, and pepper in a bowl.",
        "Brush salmon fillets with the oil mixture.",
        "Grill salmon for 4-5 minutes per side.",
        "Squeeze fresh lemon juice over the salmon.",
        "Garnish with fresh dill and serve immediately."
      ],
      "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=300&fit=crop",
      "category": "Dinner",
      "description": "Healthy and flavorful grilled salmon with a bright lemon flavor. This dish is perfect for a light and nutritious dinner."
    }
  ])

  useEffect(()=>{
    const savedRecipes = localStorage.getItem("recipes")
    if (savedRecipes) {
      setdata(JSON.parse(savedRecipes))
    }
    // If no saved recipes, keep the sample data
  }, [])
  return (
    <RecipeContext.Provider value={{data, setdata}}>
        {props.children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider

//   {
//       "id": 1,
//       "title": "Classic Margherita Pizza",
//       "ingredients": [
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste"
//       ],
//       "instructions": [
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot."
//       ],
//       "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
//       "category": "Dinner",
//       "description" : "It is roundish in shape with a raised edge and seasoned with hand-crushed peeled tomatoes, mozzarella, fresh basil leaves, and extra virgin olive oil."
//     }