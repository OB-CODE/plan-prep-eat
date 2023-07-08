import create from "zustand";

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
      return { pantry: updatedPantry };
    });
  },

  proteins: [
    { protein: 'meat', item: "Beef", checked: false },
    { protein: 'meat', item: "Chicken", checked: false },
    { protein: 'meat', item: "Pork", checked: false },
    { protein: 'meat', item: "Fish", checked: false },
    { protein: 'veg', item: "Eggs", checked: false },
    { protein: 'veg', item: "Yoghurt", checked: false },
    { protein: 'veg', item: "Milk", checked: false },
    { protein: 'vegan', item: "Tofu", checked: false },
    { protein: 'vegan', item: "Chai Seeds", checked: false },
    { protein: 'vegan', item: "Quinoa", checked: false },
  ],
  setProteins: (newProtein) => set({ proteins: newProtein }),

  handleCheckProtein: (event) => {
    set((state) => {
      const index = state.proteins.findIndex(
        (list) => list.item == event.target.name
      );
      set({ selectedProtein: state.proteins[index].item });
      state.proteins[index].checked = event.target.checked;
      return { proteins: state.proteins };
    });
  },

  selectedProtein: "...",

  setSelectedProtein: (newProtein) => set({ selectedProtein: newProtein }),
}));
