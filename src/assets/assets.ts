import logo from "./logo.png";
import parcel from "./parcel.png";
import upload from "./upload.png";
import pizzaCategory from "./pizza-cat.jpg";
import burgerCategory from "./burger-cat.jpg";
import sushiCategory from "./sushi-cat.jpg";
import dessertCategory from "./dessert-cat.jpg";
import saladCategory from "./salad-cat.jpg";

export const assets = {
  logo,
  parcel,
  upload,
};

export const categories = [
  {
    category: "Pizzas",
    image: pizzaCategory,
  },
  {
    category: "Hambuerguesas",
    image: burgerCategory,
  },
  {
    category: "Sushi",
    image: sushiCategory,
  },
  {
    category: "Postres",
    image: dessertCategory,
  },
  {
    category: "Ensaladas",
    image: saladCategory,
  },
];
