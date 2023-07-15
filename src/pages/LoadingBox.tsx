import React, { useEffect, useState } from 'react';

const LoadingBox = () => {
  const [progress, setProgress] = useState(0);
  let timer; // Declare the timer variable in the outer scope


  useEffect(() => {
    let timer = null;

    if (progress < 7) {
      timer = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 1000);
    }
  
    // Clear interval when component is unmounted or progress reaches 11
    return () => clearInterval(timer);
  }, [progress]);


  return (
    <div className='w-full flex flex-col justify-center pt-2'>
      <div className='text-center'>Loading <span className='animate-pulse'>...</span></div>
        <div className="w-1/3 mx-auto h-4 bg-gray-300">
          <div
            className={`h-full bg-purple-500 transition-width duration-1000 ${
              progress >= 7 ? 'animate-pulse' : ''
            }`}
            style={{ width: `${(progress / 7) * 100}%` }}
          />
      </div>
    </div>
  );
};

export default LoadingBox;