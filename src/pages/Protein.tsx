import React, { useState } from "react";
import { defaultPantry } from "../store/defaultPantryStore";

const Protein = () => {

  const [proteins, setProteins, handleCheckProtein] = defaultPantry((state) => [
    state.proteins,
    state.setProteins,
    state.handleCheckProtein,
  ]);

  function clearBoxes() {
    for (const item of proteins) {
      item.checked = false
    }
  }

  return (
    <div className="flex flex-row gap-5">
      <div className="checkList">
        <div className="mb-2 text-center">MEAT:</div> 
        <div className="title "></div>
          <div className="list-container flex flex-col gap-1 justify-center ">
            {proteins.map((item, index) => (
              item.protein === 'meat' && <div key={index}>
               <input
                name={item.item}
                value={item.checked}
                checked={item.checked}
                type="checkbox"
                onClick={clearBoxes}
                onChange={handleCheckProtein}
                />
              <span>{item.item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="checkList">
        <div className="mb-2 text-center">VEG:</div>
        <div className="title "></div>
          <div className="list-container flex flex-col gap-1 justify-center ">
            {proteins.map((item, index) => (
              item.protein === 'veg' && <div key={index}>
               <input
                name={item.item}
                value={item.checked}
                checked={item.checked}
                type="checkbox"
                onClick={clearBoxes}
                onChange={handleCheckProtein}
                />
              <span>{item.item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="checkList">
        <div className="mb-2 text-center">VEGAN:</div>
        <div className="title "></div>
          <div className="list-container flex flex-col gap-1 justify-center ">
            {proteins.map((item, index) => (
              item.protein === 'vegan' && <div key={index}>
               <input
                name={item.item}
                value={item.checked}
                checked={item.checked}
                type="checkbox"
                onClick={clearBoxes}
                onChange={handleCheckProtein}
                />
              <span>{item.item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

    
export default Protein

