// No check can be removed once file is in typescript
// @ts-nocheck
import React, { useState, useEffect } from "react";
import { Button, buttonVariants } from "~/UI/button";

const AutomaticCalculator = () => {
  const [protein, setProtein] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    calculateCalories();
  }, [protein, carbohydrates, fat]);

  const calculateCalories = () => {
    const proteinCalories = parseInt(protein) * 4;
    const carbohydratesCalories = parseInt(carbohydrates) * 4;
    const fatCalories = parseInt(fat) * 9;
    const totalCalories = proteinCalories + carbohydratesCalories + fatCalories;
    setCalories(totalCalories);
  };

  const inputStyle = {
    width: "50px",
    textAlign: "center",
    backgroundColor: "lightgray",
    color: "black",
  };

  const inputs = [
    { id: "protein", label: "Protein (g)", value: protein, setter: setProtein },
    {
      id: "carbohydrates",
      label: "Carbohydrates (g)",
      value: carbohydrates,
      setter: setCarbohydrates,
    },
    { id: "fat", label: "Fat (g)", value: fat, setter: setFat },
  ];

  return (
    <div>
      <div className="text-xl font-bold">Calorie Calculator #2</div>
      <h1>Calculated automatically by React State</h1>

      <div className="MacroContainer mx-auto flex w-2/3 flex-col gap-1 py-3">
        {inputs.map((input) => (
          <div key={input.id} className="flex justify-between">
            <label htmlFor={input.id}>{input.label}</label>
            <input
              id={input.id}
              type="number"
              value={input.value}
              style={inputStyle}
              onChange={(e) => input.setter(e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="mx-0-auto flex justify-center gap-4 pt-3">
        <label htmlFor="calories">Total Calories:</label>
        <input
          id="calories"
          type="number"
          value={calories}
          style={inputStyle}
          disabled
        />
      </div>
    </div>
  );
};

export default AutomaticCalculator;
