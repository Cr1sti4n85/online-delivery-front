export type FoodData = {
  name: string;
  price: number;
  category: string;
  description: string;
};

export type FoodResponse = {
  id: string;
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

export type FoodQuantity = {
  [foodId: string]: number;
};

//User
export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};
