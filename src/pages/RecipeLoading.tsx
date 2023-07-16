import React from "react";
import Image from "next/image";
import cooking from "../Components/muppet.webp";

const RecipeLoading = (props) => {
  return (
    <div className="responseBox mt-20  mb-20 flex w-9/12  flex-col gap-4 rounded-xl bg-neutral-100 p-4 align-middle shadow-shadow dark:bg-white/10 dark:text-white">
      <div className="text-center text-2xl dark:text-white">
        <p>Click Search to get started</p>
      </div>
      <div className="flex justify-center">
        <Image src={cooking} alt="muppet" width={500} height={500} />
      </div>
    </div>
  );
};

export default RecipeLoading;
