//pizza
import cheesePizzaLover from "../img/pizza/cheese-lover-pizza.jpg";
import cornPizza from "../img/pizza/corn-pizza.jpg";
import funkyPizza from "../img/pizza/funky-pizza.jpg";
import greenCreamPizza from "../img/pizza/green-cream-pizza.jpg";
import greensPizza from "../img/pizza/greens-pizza.jpg";
import mashroomPizza from "../img/pizza/mashroom-pizza.jpg";
import meatLoverPizza from "../img/pizza/meat-lover-pizza.jpg";
import pepperPizza from "../img/pizza/pepper-pizza.jpg";
import pepperoniPizza from "../img/pizza/pepperoni-pizza.jpg";
import tomatoPizza from "../img/pizza/pizza-n-tomato.jpg";
import veegCheezePizza from "../img/pizza/veeg-cheese-pizza.jpg";
import viggiesPizza from "../img/pizza/viggies-pizza.jpg";

//drinks
import blueOcean from "../img/drinks/blue-ocean.jpg";
import chocoMilkshake from "../img/drinks/chocolate-milkshake.jpg";
import cucumberSquash from "../img/drinks/cucumber-squash.jpg";
import iceChoco from "../img/drinks/ice-choco.jpg";
import iceLemonTea from "../img/drinks/ice-lemon-tea.jpg";
import iceTea from "../img/drinks/ice-tea.jpg";

//ramen
import classicRamen from "../img/ramen/classic-ramen.jpg";
import crabStickRamen from "../img/ramen/crab-stick-ramen.jpg";
import curryRamen from "../img/ramen/curry-ramen.jpg";
import duckMeatRamen from "../img/ramen/duck-meat-ramen.jpg";
import ebiRamen from "../img/ramen/ebi-ramen.jpg";
import greenRamen from "../img/ramen/green-ramen.jpg";

//rice
import chickenKatsu from "../img/rice/chicken-katsu.jpg";
import greensBowl from "../img/rice/greens-bowl.jpg";
import healthyRiceBowl from "../img/rice/healty-rice-bowl.jpg";
import katsuNasiKuning from "../img/rice/katsu-nasi-kuning.jpg";
import lemonNasiGoreng from "../img/rice/lemon-nasi-goreng.jpg";
import meatPotatoRice from "../img/rice/meat-potato-rice.jpg";

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
  {
    id: "m3",
    categories: "PIZZA",
    name: "Funky Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 115000,
    URL: funkyPizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m4",
    categories: "PIZZA",
    name: "Green Cream Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 120000,
    URL: greenCreamPizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m5",
    categories: "PIZZA",
    name: "Greens Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 111000,
    URL: greensPizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m6",
    categories: "PIZZA",
    name: "Mashroom Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 150000,
    URL: mashroomPizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m7",
    categories: "PIZZA",
    name: "Meat Lover Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 180000,
    URL: meatLoverPizza,
    bestSeller: true,
    recomended: true,
  },
  {
    id: "m8",
    categories: "PIZZA",
    name: "Pepper Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 155000,
    URL: pepperPizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m9",
    categories: "PIZZA",
    name: "Pepperoni Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 159900,
    URL: pepperoniPizza,
    bestSeller: true,
    recomended: true,
  },
  {
    id: "m10",
    categories: "PIZZA",
    name: "Tomato Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 160000,
    URL: tomatoPizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m11",
    categories: "PIZZA",
    name: "Veeg Cheese Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 160000,
    URL: veegCheezePizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m12",
    categories: "PIZZA",
    name: "Viggies Pizza",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 165000,
    URL: viggiesPizza,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m13",
    categories: "DRINKS",
    name: "Blue Ocean",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 10000,
    URL: blueOcean,
    bestSeller: false,
    recomended: true,
  },
  {
    id: "m14",
    categories: "DRINKS",
    name: "Chocolate Milkshake",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 15000,
    URL: chocoMilkshake,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m15",
    categories: "DRINKS",
    name: "Cucumber Squash",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 18000,
    URL: cucumberSquash,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m16",
    categories: "DRINKS",
    name: "Ice Choco",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 18000,
    URL: iceChoco,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m17",
    categories: "DRINKS",
    name: "Ice Lemon Tea",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 11000,
    URL: iceLemonTea,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m18",
    categories: "DRINKS",
    name: "Ice Tea",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 8000,
    URL: iceTea,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m19",
    categories: "RAMEN",
    name: "Classic Ramen",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 35000,
    URL: classicRamen,
    bestSeller: true,
    recomended: true,
  },
  {
    id: "m20",
    categories: "RAMEN",
    name: "Crab Stick Ramen",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 38000,
    URL: crabStickRamen,
    bestSeller: false,
    recomended: true,
  },
  {
    id: "m21",
    categories: "RAMEN",
    name: "Curry Ramen",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 36500,
    URL: curryRamen,
    bestSeller: false,
    recomended: true,
  },
  {
    id: "m22",
    categories: "RAMEN",
    name: "Duck Meat Ramen",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 37000,
    URL: duckMeatRamen,
    bestSeller: false,
    recomended: true,
  },
  {
    id: "m23",
    categories: "RAMEN",
    name: "Ebi Ramen",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 40000,
    URL: ebiRamen,
    bestSeller: true,
    recomended: true,
  },
  {
    id: "m24",
    categories: "RAMEN",
    name: "Green Ramen",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 30000,
    URL: greenRamen,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m25",
    categories: "RICE",
    name: "Chicken Katsu",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 35000,
    URL: chickenKatsu,
    bestSeller: false,
    recomended: true,
  },
  {
    id: "m26",
    categories: "RICE",
    name: "Greens Bowl",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 28000,
    URL: greensBowl,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m27",
    categories: "RICE",
    name: "Healthy Rice Bowl",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 28000,
    URL: healthyRiceBowl,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m28",
    categories: "RICE",
    name: "Katsu Nasi Kuning",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 25000,
    URL: katsuNasiKuning,
    bestSeller: false,
    recomended: false,
  },
  {
    id: "m29",
    categories: "RICE",
    name: "Lemon Nasi Goreng",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 30000,
    URL: lemonNasiGoreng,
    bestSeller: true,
    recomended: true,
  },
  {
    id: "m30",
    categories: "RICE",
    name: "Meat Potato Rice",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    price: 33000,
    URL: meatPotatoRice,
    bestSeller: false,
    recomended: false,
  },
];

export default LIST_MENU;
