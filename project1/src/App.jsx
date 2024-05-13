
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        const update = prev + 1;
        return update <= 100 ? update : 100;
      })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [percent])

  return (
    <>
      <h1 className='flex items-center justify-center mt-10'>Progress Bar</h1>
      <div className='flex justify-center items-center relative mt-5'>
        <div className={`w-[50vw] h-[5vh] rounded-md border border-solid border-black `} style={{
          backgroundImage: `linear-gradient(to right, green ${percent}%, transparent ${percent}%)`,
        }}></div>
        <div className='w-[0] h-[5vh] rounded-md bg-black absolute top-0 left-50 transition-all duration-500 ease-in-out transform z-10'>{percent + "%"}</div>
      </div>
    </>
  )
}

export default App
