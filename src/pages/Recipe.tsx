import React from "react";

const Recipe = (props) => {
  console.log(props.results);
  console.log();
  console.log(props.results.ingredients);
  console.log(props.results.method);

  const ingr = props.results.ingredients.map((ing) => {
    console.log(ing);
  });

  console.log(ingr);
  return (
    <div className="responseBox mt-20 mb-20 flex w-9/12 flex-col gap-4 rounded-xl  bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
      <div className="text-center text-2xl dark:text-white">
        <h2 className="text-2xl font-bold">{props.results.name}</h2>
<br />
        <h3 className="text-lg font-semibold">Ingredients</h3>
        <ul>
          {props.results.ingredients.map((ingredient) => {
            return <li className="text-base">{ingredient}</li>;
          })}
        </ul>
<br />
        <h3 className="text-lg font-semibold">Method</h3>
        <ol className="list-decimal">
          {props.results.method.map((step) => {
            return <li className="text-base">{step}</li>;
          })}
        </ol>
      </div>
    </div>
  );
};

export default Recipe;
