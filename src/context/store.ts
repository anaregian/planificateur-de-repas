import logger from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { StorageUnitContextState, storageUnitSlice } from "./storage-unit/store";
import { PlannerContextState, plannerSlice } from "./planner/store";
import { recipeSlice, RecipeContextState } from "./recipe/store";
import { userSlice, UserContextState } from "./user/store";
import { IngredientContextState, ingredientSlice } from "./ingredient/store";
import { GroceryListContextState, groceryListSlice } from "./grocery-list/store";

export type RootState = {
  userContext: UserContextState;
  recipeContext: RecipeContextState;
  plannerContext: PlannerContextState;
  storageUnitContext: StorageUnitContextState;
  ingredientContext: IngredientContextState;
  groceryListContext: GroceryListContextState;
};

const reducer = {
  userContext: userSlice.reducer,
  recipeContext: recipeSlice.reducer,
  plannerContext: plannerSlice.reducer,
  storageUnitContext: storageUnitSlice.reducer,
  ingredientContext: ingredientSlice.reducer,
  groceryListContext: groceryListSlice.reducer
};

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({ reducer, middleware });
