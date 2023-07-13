import React, { useState } from "react";

import Switches from "./Switches";
import PantryStaples from "./PantryStaples";
import { defaultPantry } from "../store/defaultPantryStore";

import { Button, buttonVariants } from "../UI/button";
import Recipe from "./Recipe";
import RecipeLoading from "./RecipeLoading";

const SearchForm = () => {
  const [pantry, setPantry, selectedProtein, selectedDietary, pantryStaples] = defaultPantry((state) => [
    state.pantry,
    state.setPantry,
    state.selectedProtein,
    state.selectedDietary,
    state.pantryStaples,
  ]);

  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // second selectedProtein is from store line 16.
        body: JSON.stringify({ selectedProtein: selectedProtein, dietary: selectedDietary, pantryStaples: pantryStaples}),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      // setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  console.log(result)

  return (
    <div className="flex flex-col	items-center h-[calc(100vh-16rem)]">
      
      <h1 className="text-3xl font-extrabold tracking-tight">SEARCH</h1>

      <div className="flex w-full">
        <div className="mx-auto flex max-w-xs flex-col gap-4 rounded-xl bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
          <h3 className="text-2xl font-bold">Plan →</h3>
          <div className="text-lg">
            Let the head chef know what your preferences are:
          </div>
          {/* Switches used for the input data for search */}
          <Switches />
        </div>

        <div className="mx-auto flex max-w-xs flex-col gap-4 rounded-xl bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
          <h3 className="text-2xl font-bold">PREP →</h3>
          <div className="text-lg">
            <div className="pb-4">
              Remove any of the pantry staples that you DON'T have:
            </div>
            <PantryStaples />
            <div id="prep">
              <div>Do you want to know the nutrients per serve?</div>
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

      {result ? <Recipe results={result}/> : <RecipeLoading/>}
    </div>
  );
};

export default SearchForm;
