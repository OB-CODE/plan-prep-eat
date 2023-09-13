'use client'

import React, { useState } from "react";
import { Button, buttonVariants } from "~/UI/button";


const PythonLambdaCalc = () => {
  const [protein, setProtein] = useState(0);
  const [carbohydrates, setCarbohydrates] = useState(0);
  const [fat, setFat] = useState(0);
  const [calories, setCalories] = useState(0);
  const [error, setError] = useState('');

  const sendDataToLambdaPython = async () => {
    const dataToSend = {
        protein: protein,
        carbohydrates: carbohydrates,
        fat: fat 
    };

    try {
      const response = await fetch("https://qyvunjmvtb.execute-api.ap-southeast-2.amazonaws.com/default/calculateInPython", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "oLeAkESt8S4etm3J1hMnl9UvgOJ6PJ9a6ylXe5g8"
        },
        body: JSON.stringify(dataToSend),
      });

      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
 
      // Converts the JSON to JS object
      const responseData = await response.json(); 
      // Handle the response data from Lambda as needed
      setCalories(responseData.result)
    } catch (error) {
      setError('Failed to get data')
      console.error("Error:", error);
    }
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
      id: "carbohydrates", label: "Carbohydrates (g)", value: carbohydrates, setter: setCarbohydrates,
    },
    { id: "fat", label: "Fat (g)", value: fat, setter: setFat },
  ];

  return (
    <div>
      <div className="text-xl font-bold	">Calorie Calculator #4</div>
      <h1>
        Calculated by Python in AWS via Lambda. Click the button to calculate.
      </h1>

      <div className="MacroContainer mx-auto flex w-1/2 flex-col gap-1 py-3">
        {inputs.map((input) => (
          <div key={input.id} className="flex justify-between">
            <label htmlFor={input.id}>{input.label}</label>
            <input
              id={input.id}
              type="number"
              value={input.value}
              style={inputStyle}
              onChange={(e) => input.setter(parseInt(e.target.value))}
            />
          </div>
        ))}
      </div>

      <Button
        onClick={sendDataToLambdaPython}
        className={buttonVariants({
          variant: "purple",
          size: "lg",
        })}
        children={"Calculate Calories"}
      ></Button>
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

export default PythonLambdaCalc;