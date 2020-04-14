import { ingredients } from "./../../data/ingredient";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";

export type IngredientContextState = {
  ingredients: Ingredient[];
};

const initialIngredientState: IngredientContextState = {
  ingredients: ingredients
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState: initialIngredientState,
  reducers: {
    create: {
      prepare: ({ name }: { name: string }) => ({
        payload: {
          ingredient: {
            id: uuid(),
            name
          }
        }
      }),
      reducer: (state, { payload }: PayloadAction<{ ingredient: Ingredient }>) => {
        state.ingredients.push(payload.ingredient);
      }
    }
  }
});

export const ingredientActions = ingredientSlice.actions;
