import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from "~/UI/button";
import { useRouter } from 'next/router';

// const router = useRouter();

// useEffect(() => {
//   // Add 'dark' class to documentElement
//   document.documentElement.classList.add('dark');
// },
//  [router.pathname]);

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function setMode(mode) {
    disableTransitionsTemporarily();
    document.documentElement.classList.toggle('dark', mode === 'dark');
    window.localStorage.isDarkMode = (mode === 'dark');
  }

  // Get the initial mode based on user preference
  // const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // const isSystemDarkMode = darkModeMediaQuery.matches;
  // const savedMode = window.localStorage.isDarkMode;

  // Set the initial mode based on user preference or saved mode
  // if (savedMode !== undefined) {
  //   setMode(savedMode === 'true' ? 'dark' : 'light');
  // } else {
  //   setMode(isSystemDarkMode ? 'dark' : 'light');
  // }

  function toggleMode() {
    const currentMode = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
  }

  return (
    <Button
    aria-label="Toggle dark mode"
        onClick={toggleMode}
        className={buttonVariants({
          className: "relative left-2 top-2 sm:left-5 sm:top-5",
          variant: "purple",
          size: "lg",
        })}
        children={"Dark Mode"}
      />
  )
}

function DarkMode() {
    // // Set the initial state of the app to start in dark mode
    // document.documentElement.classList.add('dark');

  return (
    <div className="status top-0 h-16 w-full bg-purple-300 dark:bg-purple-900 sm:h-24">
      <ModeToggle />
    </div>
  );
}

export default DarkMode;
