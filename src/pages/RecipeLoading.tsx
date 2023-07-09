import React from "react";
import Image from 'next/image';
import cooking from '../Components/muppet.webp'

const RecipeLoading = (props) => {
  return (
    <div className="responseBox  mb-5 flex flex-col  align-middle w-9/12 gap-4 rounded-xl bg-neutral-100 p-4 shadow-shadow dark:bg-white/10 dark:text-white">
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