import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState("https://images.unsplash.com/photo-1789020549170-bd08f029393f")

  return (
    <div className='w-full h-screen'>

      {/* Display Image */}
      <img
        src={image}
        alt="Selected background"
        className='w-full h-full object-cover'
      />

      {/* Image Buttons */}
      <div className='fixed flex justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-nowrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl'>

          <button
            onClick={() => setImage("https://images.unsplash.com/photo-1500530855697-b586d89ba3ee")}
            className='px-4 py-1 rounded-full text-white shadow-lg bg-green-500'>
            Nature
          </button>

          <button
            onClick={() => setImage("https://images.unsplash.com/photo-1518837695005-2083093ee35b")}
            className='px-4 py-1 rounded-full text-white shadow-lg bg-blue-500'>
            Ocean
          </button>

          <button
            onClick={() => setImage("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")}
            className='px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500'>
            Beach
          </button>

          <button
            onClick={() => setImage("https://images.unsplash.com/photo-1519681393784-d120267933ba")}
            className='px-4 py-1 rounded-full text-white shadow-lg bg-black'>
            Mountain
          </button>

          <button
            onClick={() => setImage("https://images.unsplash.com/photo-1621795307430-3ff25aa08945")}
            className='px-4 py-1 rounded-full text-white shadow-lg bg-yellow-700'>
            Dessert
          </button>

        </div>
      </div>

    </div>
  )
}

export default App