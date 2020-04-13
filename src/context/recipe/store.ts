import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";
import { recipes } from "@app/data/recipe";

export type RecipeContextState = {
  recipes: Recipe[];
};

const initialRecipeState: RecipeContextState = {
  recipes: recipes
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialRecipeState,
  reducers: {
    create: {
      prepare: (recipe: Recipe) => ({
        payload: {
          recipe: {
            ...recipe,
            id: uuid(),
            image: `https://picsum.photos/seed/${uuid()}/500/400`
          }
        }
      }),
      reducer: (state, { payload }: PayloadAction<{ recipe: Recipe }>) => {
        state.recipes.push(payload.recipe);
      }
    },
    update: (state, { payload }: PayloadAction<{ id: string; recipe: Recipe }>) => {
      const recipeToEdit = state.recipes.find(recipe => recipe.id === payload.id);

      if (recipeToEdit) {
        const { recipe } = payload;

        recipeToEdit.title = recipe.title;
        recipeToEdit.description = recipe.description;
        recipeToEdit.ingredients = recipe.ingredients;
        recipeToEdit.directions = recipe.directions;
        recipeToEdit.tags = recipe.tags;
        recipeToEdit.timeToCook = recipe.timeToCook;
      }
    },
    delete: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.recipes.findIndex(recipe => recipe.id === payload.id);

      if (index !== -1) {
        state.recipes.splice(index, 1);
      }
    }
  }
});

export const recipeActions = recipeSlice.actions;
