// No check can be removed once file is in typescript
// @ts-nocheck
import React, { useState } from "react";
import { defaultPantry } from "../store/defaultPantryStore";

const PantryStaples = () => {
  const pantry = defaultPantry((state) => state.pantry);
  const setPantry = defaultPantry((state) => state.setPantry);
  const handleCheckPantry = defaultPantry((state) => state.handleCheckPantry);

  return (
    <div>
      <div className="list-container flex flex-col justify-center gap-1 pb-3">
        {pantry.map((item, index) => (
          <div key={index}>
            <input
              name={item.item}
              value={item.checked}
              checked={item.checked}
              type="checkbox"
              onChange={handleCheckPantry}
            />
            <span>{item.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PantryStaples;
