import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [percent, setPercent] = useState(0);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check) {
      const interval = setInterval(() => {
        setPercent((prev) => {
          const update = prev + 1;
          return update <= 100 ? update : 100;
        });
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [check]);

  const handleCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center  bg-gradient-to-r from-pink-200 to-yellow-200">
      <h1 className="text-3xl font-bold mt-10">Progress Bar</h1>
      <div className="mt-5 w-[80vw] max-w-md">
        <div className="h-8 relative rounded-full bg-gray-300">
          <div
            className="h-full rounded-full bg-green-500"
            style={{ width: `${percent}%` }}
          />
          <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center font-bold text-black text-sm">
            {percent}%
          </div>
        </div>
        <div className="mt-3 text-lg font-semibold text-center">
          {percent === 100 ? 'Completed' : 'Processing'}
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-md ${
              check ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            } text-white font-semibold`}
            onClick={handleCheck}
          >
            {check && percent!=100 ? 'Stop' : 'Start'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
