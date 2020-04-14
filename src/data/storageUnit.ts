import { v1 as uuid } from "uuid";
import { steak, chicken, rice } from "./ingredient";

export const kitchenFridge: StorageUnit = {
  id: uuid(),
  name: "frigo cuisine",
  ingredients: [steak, chicken]
};

export const kitchenPantry: StorageUnit = {
  id: uuid(),
  name: "garde manger cuisine",
  ingredients: [rice]
};

export const storageUnits: StorageUnit[] = [kitchenFridge, kitchenPantry];
