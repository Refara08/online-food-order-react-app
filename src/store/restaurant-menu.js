import cheesePizzaLover from "../img/pizza/cheese-lover-pizza.jpg";
import cornPizza from "../img/pizza/corn-pizza.jpg";

const LIST_MENU = [
  {
    id: "m1",
    categories: "PIZZA",
    name: "Cheese Lover Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 120000,
    URL: cheesePizzaLover,
    bestSeller: true,
    recomended: true,
  },
  {
    id: "m2",
    categories: "PIZZA",
    name: "Corn Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 110000,
    URL: cornPizza,
    bestSeller: false,
    recomended: true,
  },
];

export default LIST_MENU;
