import React, { useState } from "react";
import { defaultPantry } from '../store/selectedFoodStore'

const PantryStaples = () => {

  const pantry = defaultPantry((state) => state.pantry);
  const setPantry = defaultPantry((state) => state.setPantry);

  // const [pantry, setPantry] = useState([
  //   { item: "Pepper", checked: true },
  //   { item: "Salt", checked: true },
  //   { item: "Olive oil", checked: true },
  //   { item: "Vegetable oil", checked: true },
  //   { item: "Flour", checked: true },
  //   { item: "Vinegar", checked: true },
  // ]);

  const handleCheckpantry = (event: { target: { name: string; checked: boolean; }; }) => {
    const index = pantry.findIndex((list) => list.item == event.target.name);
    pantry[index].checked = !pantry[index].checked;
    setPantry([...pantry]);
  };

  return (
    <div>
      <div className="list-container flex flex-col gap-1 justify-center pb-3">
          {pantry.map((item, index) => (
            <div key={index}>
              <input
              name={item.item}
              value={item.checked}
              checked={item.checked}
              type="checkbox"
              onChange={handleCheckpantry}
              />
            <span>{item.item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PantryStaples
