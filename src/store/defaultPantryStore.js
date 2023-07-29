// import { it } from "node:test";
// No check can be removed once file is in typescript
// @ts-nocheck
import create from "zustand";
import PantryStaples from "~/pages/PantryStaples";

export const defaultPantry = create((set, get) => ({
  pantry: [
    { item: "Pepper", checked: true },
    { item: "Salt", checked: true },
    { item: "Olive oil", checked: true },
    { item: "Vegetable oil", checked: true },
    { item: "Flour", checked: true },
    { item: "Vinegar", checked: true },
  ],
  setPantry: (newPantry) => set({ pantry: newPantry }),

  handleCheckPantry: (event) => {
    const { name } = event.target;
    set((state) => {
      const updatedPantry = state.pantry.map((item) =>
        item.item === name ? { ...item, checked: !item.checked } : item
      );

      const pantryStaples = updatedPantry
        .filter((item) => item.checked)
        .map((item) => item.item);

      return { pantry: updatedPantry, pantryStaples: pantryStaples };
    });
  },

  proteins: [
    { dietary: "omnivore", item: "Beef", checked: false },
    { dietary: "omnivore", item: "Chicken", checked: false },
    { dietary: "omnivore", item: "Pork", checked: false },
    { dietary: "omnivore", item: "Fish", checked: false },
    { dietary: "vegetarian", item: "Eggs", checked: false },
    { dietary: "vegetarian", item: "Yoghurt", checked: false },
    { dietary: "vegetarian", item: "Milk", checked: false },
    { dietary: "vegan", item: "Tofu", checked: false },
    { dietary: "vegan", item: "Chai Seeds", checked: false },
    { dietary: "vegan", item: "Quinoa", checked: false },
  ],
  setProteins: (newProtein) => set({ proteins: newProtein }),

  handleCheckProtein: (event) => {
    set((state) => {
      const index = state.proteins.findIndex(
        (list) => list.item == event.target.name
      );
      set({ selectedProtein: state.proteins[index].item });
      set({ selectedDietary: state.proteins[index].dietary });
      state.proteins[index].checked = event.target.checked;
      return { proteins: state.proteins };
    });
  },

  selectedProtein: "...",

  setSelectedProtein: (newProtein) => set({ selectedProtein: newProtein }),

  selectedDietary: "...",

  setSelectedDietary: (newDietary) => set({ selectedDietary: newDietary }),

  pantryStaples: ['Pepper', 'Salt', 'Olive oil', 'Vegetable oil', 'Flour', 'Vinegar'],

  setPantryStaples: (newStaples) => set({ pantryStaples: newStaples }),
}));
