import create from "zustand";

export const defaultPantry = create((set) => ({
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
      return { pantry: updatedPantry };
    });
  },
}));
