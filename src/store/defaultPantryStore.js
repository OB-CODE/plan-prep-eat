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

  meat: [
    { item: "Beef", checked: false },
    { item: "Chicken", checked: false },
    { item: "Pork", checked: false },
    { item: "Fish", checked: false },
  ],
  setMeat: (newMeat) => set({ meat: newMeat }),

  handleCheckMeat: (event) => {
    set((state) => {
      const index = state.meat.findIndex(
        (list) => list.item == event.target.name
      );
      set({ selectedProtein: state.meat[index].item });
      state.meat[index].checked = event.target.checked;
      return { meat: state.meat };
    
    });
  },

  veg: [
    { item: "Eggs", checked: false },
    { item: "Yoghurt", checked: false },
    { item: "Milk", checked: false },
  ],
  setVeg: (newVeg) => set({ veg: newVeg }),

  handleCheckVeg: (event) => {
    set((state) => {
      const index = state.veg.findIndex(
        (list) => list.item == event.target.name
      );
      set({ selectedProtein: state.veg[index].item });
      state.veg[index].checked = event.target.checked;
      return { veg: state.veg };
    });
  },

  vegan: [
    { item: "Tofu", checked: false },
    { item: "Chai Seeds", checked: false },
    { item: "Quinoa", checked: false },
  ],
  setVegan: (newVegan) => set({ vegan: newVegan }),

  handleCheckVegan: (event) => {
    set((state) => {
      const index = state.vegan.findIndex(
        (list) => list.item == event.target.name
      );
      set({ selectedProtein: state.vegan[index].item });
      vegan[index].checked = event.target.checked;
      return { vegan: state.vegan };
    });
  },

  selectedProtein: "...",

  setSelectedProtein: (newProtein) => set({ selectedProtein: newProtein }),
}));
