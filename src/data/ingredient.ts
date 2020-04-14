import { v1 as uuid } from "uuid";

export const chicken: Ingredient = {
  id: uuid(),
  name: "Poulet"
};

export const steak: Ingredient = {
  id: uuid(),
  name: "steak"
};

export const salmon: Ingredient = {
  id: uuid(),
  name: "Saumon"
};

export const rice: Ingredient = {
  id: uuid(),
  name: "Riz"
};

export const fries: Ingredient = {
  id: uuid(),
  name: "Frites"
};

export const ingredients = [chicken, steak, salmon, rice, fries];
