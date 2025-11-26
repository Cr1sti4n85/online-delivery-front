export type FoodData = {
  name: string;
  price: number;
  category: string;
  description: string;
};

export type FoodResponse = {
  id: number;
  name: string;
  price: number;
  category: FoodCategory;
  description: string;
  imageUrl: string;
};

export enum FoodCategory {
  All = "All",
  Pizzas = "Pizzas",
  Burgers = "Burgers",
  Sushi = "Sushi",
  Desserts = "Desserts",
  Salads = "Salads",
}
