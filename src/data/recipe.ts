import { v1 as uuid } from "uuid";
import { chicken, rice, steak, salmon, fries } from "./ingredient";

export const chickenAndRice: Recipe = {
  id: uuid(),
  title: "Poulet et riz",
  image: `https://picsum.photos/seed/${uuid()}/500/400`,
  description: "du poulet avec du riz",
  ingredients: [chicken, rice],
  directions: "cuire dans le four",
  tags: ["poulet", "viande"],
  timeToCook: 30
};

export const steakAndfries: Recipe = {
  id: uuid(),
  title: "Steak frites",
  image: `https://picsum.photos/seed/${uuid()}/500/400`,
  description: "Du steak et des frites",
  ingredients: [steak, fries],
  directions: "cuire sur la cuisiniere",
  tags: ["steak", "viande"],
  timeToCook: 40
};

export const salmonAndRice: Recipe = {
  id: uuid(),
  title: "Saumon et riz",
  image: `https://picsum.photos/seed/${uuid()}/500/400`,
  description: "Du saumon et du riz",
  ingredients: [salmon, rice],
  directions: "cuire dans le four",
  tags: ["saumon", "poisson"],
  timeToCook: 50
};

export const recipes: Recipe[] = [chickenAndRice, steakAndfries, salmonAndRice];
