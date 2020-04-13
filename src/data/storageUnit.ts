import { v1 as uuid } from "uuid";
import { beef, chicken, rice } from "./ingredient";

export const storageUnits: StorageUnit[] = [
  {
    id: uuid(),
    name: "frigo cuisine",
    ingredients: [beef, chicken]
  },
  {
    id: uuid(),
    name: "garde manger cuisine",
    ingredients: [rice]
  }
];
