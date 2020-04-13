import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isEqual } from "date-fns";

export type PlannerContextState = {
  planner: Planner[];
};

const initialPlannerState: PlannerContextState = {
  planner: []
};

export const plannerSlice = createSlice({
  name: "planner",
  initialState: initialPlannerState,
  reducers: {
    assignRecipe: (state, { payload }: PayloadAction<{ date: string; recipeId: string }>) => {
      const date = new Date(payload.date);
      const existingDate = state.planner.find(planner => isEqual(new Date(planner.date), date));

      if (!existingDate) {
        state.planner.push({
          date: date.toString(),
          recipeIds: [payload.recipeId]
        });
      } else {
        existingDate.recipeIds.push(payload.recipeId);
      }
    },
    removeRecipe: (state, { payload }: PayloadAction<{ date: string; recipeId: string }>) => {
      const date = new Date(payload.date);
      const existingDate = state.planner.find(planner => isEqual(new Date(planner.date), date));

      if (existingDate) {
        const index = existingDate.recipeIds.findIndex(recipeId => recipeId === payload.recipeId);

        if (index !== -1) {
          existingDate.recipeIds.splice(index, 1);

          if (existingDate.recipeIds.length === 0) {
            const dateIndex = state.planner.findIndex(planner => isEqual(new Date(planner.date), date));
            state.planner.splice(dateIndex, 1);
          }
        }
      }
    }
  }
});

export const plannerActions = plannerSlice.actions;
