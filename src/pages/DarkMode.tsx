import React from 'react'



const toggleDark = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  const button: HTMLButtonElement = event.currentTarget;
  document.documentElement.classList.toggle('dark')
}

function DarkMode() {
  // add dark mode on launching app.
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }
    return (
    <div>

      <button onClick={toggleDark} className='absolute left-5 top-5 bg-purple-500 p-1 text-1xl font-extrabold tracking-tight toggle-dark'
      
      >Dark Mode</button>
    </div>
  )
}

export default DarkMode
