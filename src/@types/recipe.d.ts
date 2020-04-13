type Recipe = {
  readonly id?: string;
  title: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  directions: string;
  tags: string[];
  timeToCook: number;
};
