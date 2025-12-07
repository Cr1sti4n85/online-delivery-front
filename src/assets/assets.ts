import logo from "./logo.png";
import parcel from "./parcel.png";
import upload from "./upload.png";
import pizzaCategory from "./pizza-cat.jpg";
import burgerCategory from "./burger-cat.jpg";
import sushiCategory from "./sushi-cat.jpg";
import dessertCategory from "./dessert-cat.jpg";
import saladCategory from "./salad-cat.jpg";
import { FoodCategory } from "../types.d";
import avatar from "./avatar.png";

export const assets = {
  logo,
  parcel,
  upload,
  avatar,
};

export const categories = [
  {
    category: FoodCategory.Pizzas,
    image: pizzaCategory,
  },
  {
    category: FoodCategory.Burgers,
    image: burgerCategory,
  },
  {
    category: FoodCategory.Sushi,
    image: sushiCategory,
  },
  {
    category: FoodCategory.Desserts,
    image: dessertCategory,
  },
  {
    category: FoodCategory.Salads,
    image: saladCategory,
  },
];
