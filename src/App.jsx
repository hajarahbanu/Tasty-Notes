import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='min-h-screen bg-green-50 text-teal-600 flex flex-col'>
      <div className='flex-1 py-10 px-[10%]'>
        <Navbar />
        <Mainroutes />
      </div>
      <footer className='bg-black text-white py-6 text-center'>
        <p className='text-sm'>Made with ❤️ by Hajarah</p>
      </footer>
    </div>
  )
}

export default App