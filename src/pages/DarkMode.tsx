import React, { useState } from 'react';
import { Button, buttonVariants } from '~/UI/button';


const toggleDark = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();


  const button: HTMLButtonElement = event.currentTarget;
  document.documentElement.classList.toggle('dark')
  console.log(document.documentElement.classList.value.includes('dark'))
}

function DarkMode() {
  const [inDarkMode, setInDarkMode ] = useState(true)

  // const toggleDark = () => {
  //   setInDarkMode(!inDarkMode);
  //   document.documentElement.classList.toggle('dark')
  // };

  // add dark mode on launching app.
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }
    return (
    <div className='bg-slate-300 dark:bg-slate-600 w-full fixed h-16 top-0 sm:h-24'>
      <Button onClick={toggleDark}  className={buttonVariants({ className: 'relative left-2 top-2 sm:left-5 sm:top-5', variant: "purple", size: "lg"})} children={'Dark Mode'}/>

      {/* <button onClick={toggleDark} className='absolute left-5 top-5 bg-purple-500 p-1 text-1xl font-extrabold tracking-tight toggle-dark' */}
      {/* >Dark Mode</button> */}
    </div>
  )
}

export default DarkMode
