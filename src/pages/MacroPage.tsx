import React, { useState } from 'react';
import ManualButtonCalculator from './MacroCalculators/ManualButtonCalculator';
import AutomaticCalculator from './MacroCalculators/AutomaticCalculator';

import Image from 'next/image'
import reactIMG from './MacroCalculators/React-logo.png'


const MacroPage = () => {

  return (
    <div className='text-center'>
            <h1 className="text-5xl pb-5 font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
              Plan <span className="text-[hsl(280,100%,70%)]">PREP</span> Eat
            </h1>
            <div className='flex flex-col gap-10'>
                   <ManualButtonCalculator />
            <div className='flex flex-row justify-center w-10/12 mx-auto border border-black'>
                <div className='overflow-hidden'><Image       
                src={reactIMG}
      width={300}
      height={300}
      alt="react spinning"
      className='animation-spin'
      /></div>
                <AutomaticCalculator /> </div>
            </div>

    </div>



  )
}

export default MacroPage