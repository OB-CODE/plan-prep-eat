// No check can be removed once file is in typescript
// @ts-nocheck
import React from "react";

const Recipe = (props) => {
  console.log(props.results);
  console.log();
  console.log(props.results.ingredients);
  console.log(props.results.method);

  return (
    <div className="responseBox mt-20 mb-20 flex w-9/12 flex-col gap-4 rounded-xl  bg-neutral-100 p-14 text-center shadow-shadow dark:bg-white/10 dark:text-white">
      <h2 className="text-2xl font-bold">{props.results.name}</h2>

      <h3 className="mt-5 text-lg font-semibold">Ingredients</h3>
      <ul>
        {props.results.ingredients.map((ingredient) => (
          <li className="text-base">{ingredient}</li>
        ))}
      </ul>

      <h3 className="mt-5 text-lg font-semibold">Method</h3>
      <ol className="list-decimal">
        {props.results.method.map((step) => {
          return <li className="text-base">{step}</li>;
        })}
      </ol>
    </div>
  );
};

export default Recipe;
