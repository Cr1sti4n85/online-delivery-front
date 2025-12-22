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

export type LoginRequest = {
  email: string;
  password: string;
};

export type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userAddress: string;
  city: string;
  country: string;
};

//ORDERS
export type OrderRequest = {
  userAddress: string;
  email: string;
  phoneNumber: string;
  orderedItems: OrderedItem[];
  amount: number;
  orderStatus: string;
};

export type OrderedItem = {
  foodId: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  quantity: number;
};
