import React, { useState } from "react";
import { defaultPantry } from "../store/defaultPantryStore";

const Protein = () => {

  // const [checkList, setCheckList] = useState([
  //   { item: "VEGAN", checked: false },
  //   { item: "VEG", checked: false },
  //   { item: "MEAT", checked: false },
  // ]);

  // const [meat, setMeat] = useState([
  //   { item: "Beef", checked: false },
  //   { item: "Chicken", checked: false },
  //   { item: "Pork", checked: false },
  //   { item: "Fish", checked: false },
  // ]);

  // const [veg, setVeg] = useState([
  //   { item: "Eggs", checked: false },
  //   { item: "Yoghurt", checked: false },
  //   { item: "Milk", checked: false },
  // ]);

  // const [vegan, setVegan] = useState([
  //   { item: "Tofu", checked: false },
  //   { item: "Chai Seeds", checked: false },
  //   { item: "Quinoa", checked: false },
  // ]);

  const [meat, setMeat, handleCheckMeat] = defaultPantry((state) => [
    state.meat,
    state.setMeat,
    state.handleCheckMeat,
  ]);

  const [veg, setVeg] = defaultPantry((state) => [
    state.veg,
    state.setVeg,
  ]);

  const [vegan, setVegan] = defaultPantry((state) => [
    state.vegan,
    state.setVegan,
  ]);

  function clearBoxes() {
    for (const item of meat) {
      item.checked = false
    }
    for (const item of veg) {
      item.checked = false
    }    for (const item of vegan) {
      item.checked = false
    }
  }

  // function renderProteinChoice() {
  //   for (const meatItem of meat) {
  //     if(meatItem.checked) {
  //       return `Selected: ${meatItem.item}`
  //     }
  //   }
  // }

  return (
    <div className="flex flex-row gap-5">
      <div className="checkList">
        <div className="mb-2 text-center">MEAT:</div> 
        <div className="title "></div>
          <div className="list-container flex flex-col gap-1 justify-center ">
            {meat.map((item, index) => (
              <div key={index}>
               <input
                name={item.item}
                value={item.checked}
                checked={item.checked}
                type="checkbox"
                onClick={clearBoxes}
                onChange={handleCheckMeat}
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
            {veg.map((item, index) => (
              <div key={index}>
               <input
                name={item.item}
                value={item.checked}
                checked={item.checked}
                type="checkbox"
                onClick={clearBoxes}
                onChange={handleCheckVeg}
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
            {vegan.map((item, index) => (
              <div key={index}>
               <input
                name={item.item}
                value={item.checked}
                checked={item.checked}
                type="checkbox"
                onClick={clearBoxes}
                onChange={handleCheckVegan}
                />
              <span>{item.item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )}

    
export default Protein

