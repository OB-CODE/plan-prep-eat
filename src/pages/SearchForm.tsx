import React, { useState } from "react";

import Switches from "./Switches";
import PantryStaples from "./PantryStaples";
import { defaultPantry } from "../store/defaultPantryStore";

import { Button, buttonVariants } from "../UI/button";
import Recipe from "./Recipe";
import RecipeLoading from "./RecipeLoading";
import LoadingBox from "./LoadingBox";

import {useStore } from "../store/apiStore"


const SearchForm = () => {
  const [pantry, setPantry, selectedProtein, selectedDietary, pantryStaples] =
    defaultPantry((state) => [
      state.pantry,
      state.setPantry,
      state.selectedProtein,
      state.selectedDietary,
      state.pantryStaples,
    ]);

  const [result, setResult] = useState();

    // Used to change to store var that controls the loading bar
    const [currentlyLoading, setCurrentlyLoading] = useStore((state) => [
      state.currentlyLoading,
      state.setCurrentlyLoading,
    ]);
  

  async function onSubmit(event) {
    event.preventDefault();
    setCurrentlyLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // second selectedProtein is from store line 16.
        body: JSON.stringify({
          selectedProtein: selectedProtein,
          dietary: selectedDietary,
          pantryStaples: pantryStaples,
        }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      console.log(data.result);
      const recipeObj = JSON.parse(data.result);
      console.log(recipeObj);
      setResult(recipeObj);
      // setAnimalInput("");
      setCurrentlyLoading(false)
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }
  console.log(result)

  return (
    <div className="h-full">
    <div className="flex flex-col items-center ">
      {/* <h1 className="text-3xl font-extrabold tracking-tight">SEARCH</h1> */}
      <h1 className="text-5xl pb-5 font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
              Plan <span className="text-[hsl(280,100%,70%)]">PREP</span> Eat
            </h1>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Plan box on the left hand side */}
        <div className="mx-auto flex max-w-xs flex-col rounded-xl bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
          <h3 className="text-2xl font-bold">Plan →</h3>
          <div className="text-lg">
            Let the head chef know what your preferences are:
          </div>
          {/* Switches used for the input data for search */}
          <Switches />
        </div>
        {/* Prep box on the left hand side */}
        <div className="mx-auto flex max-w-xs flex-col gap-4 rounded-xl bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
          <h3 className="text-2xl font-bold">PREP →</h3>
          <div className="text-lg">
            <div className="pb-4">
              Remove any of the pantry staples that you DON'T have:
            </div>
            <PantryStaples />
            <div id="prep">
              {/* <div>Do you want to know the nutrients per serve?</div> */}
              <div>Search the internet for a recipe</div>
              <div className="mt-4 flex justify-center">
                <Button
                  className={buttonVariants({
                    variant: "purple",
                    size: "",
                  })}
                  children={"SEARCH"}
                  onClick={onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {currentlyLoading ? <LoadingBox /> : null}
      

      {/* <div>Seach Prompt</div> */}
      {/* <div className="flex">
        Provide a meal suggestion based around {selectedProtein} as the main
        ingredient. Assume the person has the following ingredients:
        {pantry.map((item, index) =>
          item.checked ? (
            <div className="pl-2" key={index}>
              {item.item}
            </div>
          ) : null
        )}
      </div> */}
      {/* <div className="flex">
        Assume the person does not have the following ingredients:
        {pantry.map((item, index) =>
          item.checked === false ? (
            <div className="pl-2" key={index}>
              {item.item}
            </div>
          ) : null
        )}
      </div> */}

      {result ? <Recipe results={result} /> : <RecipeLoading />}
    </div>
    </div>


  );
};

export default SearchForm;
