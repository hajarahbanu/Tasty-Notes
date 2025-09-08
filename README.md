# 🍳 TastyNotes - Recipe Management App

A modern, responsive web application for discovering, creating, and managing your favorite recipes. Built with React and styled with Tailwind CSS, TastyNotes provides an intuitive interface for culinary enthusiasts to organize their cooking journey.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-brightgreen)](https://tasty-notes-two.vercel.app/) ![React](https://img.shields.io/badge/React-19.1.1-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC) ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF)

## ✨ Features

### 🏠 **Home Dashboard**
- Welcome section with chef hat branding
- Real-time recipe statistics
- Featured recipes showcase
- Quick access to main features

### 📚 **Recipe Management**
- **Browse Recipes**: View all available recipes with beautiful card layouts
- **Search & Filter**: Find recipes by title, category, or ingredients
- **Recipe Details**: Comprehensive view with ingredients, instructions, and metadata
- **Create Recipes**: Intuitive form with validation for adding new recipes
- **Edit & Delete**: Full CRUD operations for recipe management

### ❤️ **Favorites System**
- Save favorite recipes for quick access
- Manage your personal collection
- Search and filter through saved recipes
- Export/Share functionality

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Teal and green color scheme
- Smooth animations and hover effects
- Professional iconography using React Icons
- Loading states and error handling

### 🔧 **Technical Features**
- Client-side routing with React Router
- Global state management with React Context
- Form validation with React Hook Form
- Local storage persistence
- Toast notifications for user feedback
- Professional footer with attribution

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.12
- **Routing**: React Router DOM 7.8.1
- **Icons**: React Icons 5.5.0
- **Forms**: React Hook Form 7.62.0
- **Notifications**: React Toastify 11.0.5
- **HTTP Client**: Axios 1.11.0
- **ID Generation**: nanoid 5.1.5

## 🌐 Live Demo

**[🚀 Visit TastyNotes Live] (https://tasty-notes-two.vercel.app/)**

Experience the full application with all features including recipe browsing, creation, and favorites management.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-app.git
   cd recipe-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with app introduction
- Statistics dashboard
- Featured recipes carousel
- Call-to-action buttons

### Recipes Page (`/recipes`)
- Grid layout of all recipes
- Search and filter functionality
- Recipe count display
- Responsive card design

### Create Recipe (`/create-recipes`)
- Multi-step form with validation
- Image upload support
- Ingredients and instructions management
- Category and tag assignment
- Recipe creation tips

### Recipe Details (`/recipes/details/:id`)
- Full recipe information display
- Edit/Delete functionality
- Favorite toggle
- Responsive layout

### Favorites (`/favorite`)
- Personal recipe collection
- Search and filter options
- Quick actions (share/export)
- Empty state handling

## 🎨 Design System

### Color Palette
- **Primary**: Teal (#0D9488)
- **Secondary**: Green (#059669)
- **Background**: Light Green (#F0FDF4)
- **Text**: Dark Teal (#0F766E)
- **Accent**: Various shades for categories

### Typography
- **Headings**: Bold, large sizes for hierarchy
- **Body**: Clean, readable font stack
- **Icons**: React Icons for consistency

### Components
- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Consistent styling with hover states
- **Forms**: Clean inputs with validation feedback
- **Navigation**: Responsive navbar with active states

## 🚀 Deployment

### Vercel (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the Vite configuration
   - The `vercel.json` file handles client-side routing

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard


## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── RecipeCard.jsx  # Recipe card component
├── context/            # Global state management
│   └── RecipeContext.jsx
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Recipes.jsx     # Recipe listing
│   ├── Create.jsx      # Recipe creation
│   ├── SingleRecipe.jsx # Recipe details
│   ├── Fav.jsx         # Favorites page
│   └── PageNotFound.jsx
├── routes/             # Routing configuration
│   └── Mainroutes.jsx
├── utils/              # Utility functions
│   └── axios.jsx       # HTTP client configuration
├── App.jsx             # Main app component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```


## 👨‍💻 Author

**Hajarah**
- Made with ❤️ by Hajarah

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first styling
- React Icons for the beautiful icon set
- Vite for the lightning-fast build tool

---

**Happy Cooking! 🍳✨**
