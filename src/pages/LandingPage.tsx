import React from 'react'

const LandingPage = () => {
  return (
    // TODO: change min-h-screen class to fit content when landing page is complete
    <div>
          {/* <div className='flex items-center h-full'> 
      <div className="text-3xl font-extrabold tracking-tight h-full">
        HELLO!
      </div>
    </div> */}
          <div className="flex min-h-screen flex-col items-center from-[#342944] to-[#0d0e12] text-black dark:bg-gradient-to-b pt-[12vh] dark:text-white">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-6 ">
            <h1 className="text-5xl font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
              Plan <span className="text-[hsl(280,100%,70%)]">PREP</span> Eat
            </h1>
          </div>
          </div>
    </div>

  )
}

export default LandingPage