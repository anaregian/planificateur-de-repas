import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GroceryListContextState = {
  items: Ingredient[];
};

const initialGroceryListState: GroceryListContextState = {
  items: []
};

export const groceryListSlice = createSlice({
  name: "groceryList",
  initialState: initialGroceryListState,
  reducers: {
    addIngredient: (state, { payload }: PayloadAction<{ ingredient: Ingredient }>) => {
      state.items.push(payload.ingredient);
    },
    removeIngredient: (state, { payload }: PayloadAction<{ ingredientId: string }>) => {
      const index = state.items.findIndex(ingredient => ingredient.id === payload.ingredientId);

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    }
  }
});

export const groceryListActions = groceryListSlice.actions;
