import { v1 as uuid } from "uuid";
import { chicken, rice, beef, fish } from "./ingredient";

export const recipes: Recipe[] = [
  {
    id: uuid(),
    title: "Chicken and rice",
    image: `https://picsum.photos/seed/${uuid()}/500/400`,
    description: "A lovely chicken dish",
    ingredients: [chicken, rice],
    directions: "Cook everything",
    tags: ["chicken", "meat"],
    timeToCook: 30
  },
  {
    id: uuid(),
    title: "Beef and rice",
    image: `https://picsum.photos/seed/${uuid()}/500/400`,
    description: "A lovely beef dish",
    ingredients: [beef, rice],
    directions: "Cook everything",
    tags: ["beef", "meat"],
    timeToCook: 40
  },
  {
    id: uuid(),
    title: "Fish and rice",
    image: `https://picsum.photos/seed/${uuid()}/500/400`,
    description: "A lovely fish dish",
    ingredients: [fish, rice],
    directions: "Cook everything",
    tags: ["fish", "meat"],
    timeToCook: 50
  }
];
