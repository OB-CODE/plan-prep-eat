import React from "react";

const Recipe = (props) => {
  return (
    <div className="responseBox mb-5 flex h-[30vh] w-9/12 flex-col gap-4 rounded-xl  bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
  
      <div className="text-center text-2xl dark:text-white">
        <p>Over to you... Eat Up!!!!</p>
        <br />
        <div>
          <h3>Results:</h3>
          {props.results}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
