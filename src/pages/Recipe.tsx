import React from "react";

const Recipe = (props) => {
  return (
    <div className="mt-20 responseBox mb-20 flex w-9/12 flex-col gap-4 rounded-xl  bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
      <div className="text-center text-2xl dark:text-white">
        <div className="whitespace-pre-wrap">{props.results}</div>
      </div>
    </div>
  );
};

export default Recipe;
