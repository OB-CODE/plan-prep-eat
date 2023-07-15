import create from "zustand";

// Use a store value to change on a button click, thus triggering a loading bar to appear on the screen. 

export const loadingGPTapi = create((set) => ({
    currentlyLoading: false,
    setCurrentlyLoading: (isLoading) => {
      set({ currentlyLoading: isLoading });
    },
  }));

  export const useStore = loadingGPTapi;
