import React, { useState } from 'react';
import { Button, buttonVariants } from '~/UI/button';

const ManualButtonCalculator = () => {
        // For counting calories:
        const [protein, setProtein] = useState(0);
        const [carbohydrates, setCarbohydrates] = useState(0);
        const [fat, setFat] = useState(0);
        const [calories, setCalories] = useState(0);
      
        const calculateCalories = () => {
          const proteinCalories = parseInt(protein) * 4;
          const carbohydratesCalories = parseInt(carbohydrates) * 4;
          const fatCalories = parseInt(fat) * 9;
          const totalCalories = proteinCalories + carbohydratesCalories + fatCalories;
          setCalories(totalCalories);
        };

        // CSS for the input tags
        const inputStyle = {
            width: '50px',
            textAlign: 'center',
            backgroundColor: 'lightgray',
            color: 'black',
          };

          const inputs = [
            { id: 'protein', label: 'Protein (g)', value: protein, setter: setProtein },
            { id: 'carbohydrates', label: 'Carbohydrates (g)', value: carbohydrates, setter: setCarbohydrates },
            { id: 'fat', label: 'Fat (g)', value: fat, setter: setFat },
          ];

  return (
    <div>

    <div className='text-xl font-bold	'>Calorie Calculator #1</div>
    <h1>Calculated by JS in the front-end. Click the button to calculate. </h1>

<div className='MacroContainer py-3 flex flex-col gap-1 w-1/4 mx-auto'>
    {inputs.map((input) => (
      <div key={input.id} className='flex justify-between'>
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

    <Button onClick={calculateCalories} className={buttonVariants({
          variant: "purple",
          size: "lg",
        })}
        children={"Calculate Calories"} ></Button>
    <div className='pt-3 flex gap-4 mx-0-auto justify-center'>
      <label htmlFor="calories">Total Calories:</label>
      <input
        id="calories"
        type="number"
        value={calories}
        style={inputStyle}

        disabled
      />
    </div>
  </div>  )
}

export default ManualButtonCalculator