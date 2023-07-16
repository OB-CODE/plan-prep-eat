import React, { useState } from "react";
import ManualButtonCalculator from "./MacroCalculators/ManualButtonCalculator";
import AutomaticCalculator from "./MacroCalculators/AutomaticCalculator";
import PythonCalculator from "./MacroCalculators/PythonCalculator";
import CSharpCalculator from "./MacroCalculators/CSharpCalculator";

import Image from "next/image";
import reactIMG from "./MacroCalculators/React-logo.png";
import pythonIMG from "./MacroCalculators/Python-Symbol.png";
import CSharpIMG from "./MacroCalculators/C-Sharp.png";

const MacroPage = () => {
  return (
    <div className="pb-10 text-center">
      <h1 className="pb-5 text-5xl font-extrabold tracking-tight dark:text-white sm:text-[5rem]">
        Plan <span className="text-[hsl(280,100%,70%)]">PREP</span> Eat
      </h1>
      <div className="flex flex-col gap-10">
        <ManualButtonCalculator />

        {/*Python - Content for the React front end calculator */}
        <div className="mx-auto flex w-10/12 flex-col justify-center border border-black dark:border-white sm:flex-row">
          <div className="overflow-hidden">
            <Image
              src={reactIMG}
              width={300}
              height={300}
              alt="react spinning"
              className="animation-spin"
            />
          </div>
          <AutomaticCalculator />
        </div>

        {/*.NET - Details for the cal to go to a .NET backend */}

        <div className="mx-auto flex w-10/12 flex-col justify-center sm:flex-row ">
          <PythonCalculator />
          <div className="overflow-hidden">
            <Image
              src={pythonIMG}
              width={300}
              height={300}
              alt="react spinning"
              className="p-3"
            />
          </div>
        </div>

        {/* Details for the cal to go to a python backend */}

        <div className="mx-auto flex w-10/12 flex-col justify-center border border-black dark:border-white sm:flex-row">
          <div className="overflow-hidden">
            <Image
              src={CSharpIMG}
              width={300}
              height={300}
              alt="react spinning"
            />
          </div>
          <CSharpCalculator />
        </div>
      </div>
    </div>
  );
};

export default MacroPage;
