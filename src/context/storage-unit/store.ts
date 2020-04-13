import { storageUnits } from "./../../data/storageUnit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";

export type StorageUnitContextState = {
  storageUnits: StorageUnit[];
};

const initialStorageUnitState: StorageUnitContextState = {
  storageUnits: storageUnits
};

export const storageUnitSlice = createSlice({
  name: "storageUnit",
  initialState: initialStorageUnitState,
  reducers: {
    create: {
      prepare: ({ name }: { name: string }) => ({
        payload: {
          storageUnit: {
            id: uuid(),
            name,
            ingredients: []
          }
        }
      }),
      reducer: (state, { payload }: PayloadAction<{ storageUnit: StorageUnit }>) => {
        state.storageUnits.push(payload.storageUnit);
      }
    },
    delete: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.storageUnits.findIndex(unit => unit.id === payload.id);

      if (index !== -1) {
        state.storageUnits.splice(index, 1);
      }
    },
    addIngredient: {
      prepare: ({ id, name }: { id: string; name: string }) => ({
        payload: {
          id,
          ingredient: {
            id: uuid(),
            name
          }
        }
      }),
      reducer: (state, { payload }: PayloadAction<{ id: string; ingredient: Ingredient }>) => {
        const unit = state.storageUnits.find(unit => unit.id === payload.id);

        if (unit) {
          unit.ingredients.push(payload.ingredient);
        }
      }
    },
    removeIngredient: (state, { payload }: PayloadAction<{ id: string; ingredientId: string }>) => {
      const unit = state.storageUnits.find(unit => unit.id === payload.id);

      if (unit) {
        const index = unit.ingredients.findIndex(ingredient => ingredient.id === payload.ingredientId);

        if (index !== -1) {
          unit.ingredients.splice(index, 1);
        }
      }
    }
  }
});

export const storageUnitActions = storageUnitSlice.actions;
