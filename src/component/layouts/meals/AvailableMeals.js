import { useState } from "react";
import MealsGroup from "./MealsGroup";

const AvailableMeals = () => {
  const [selected, setSelected] = useState("ALL");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="title px-6">
        <span className="block font-bold text-black mb-2 tracking-widest w-fit">
          Discover
        </span>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <h2 className="font-semibold text-3xl">Our Featured Menu</h2>
          <div className="w-[360px] lg:w-[920px] relative categories-parent">
            <div className="w-full -ml-2 pb-4 lg:pb-0 overflow-x-auto">
              <form
                action=""
                className="categories flex justify-start items-center gap-0 w-[170%] lg:w-full"
              >
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="all"
                    value="ALL"
                    checked={selected === "ALL"}
                    onChange={handleChange}
                  />
                  <label htmlFor="all">All</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="pizza"
                    value="PIZZA"
                    checked={selected === "PIZZA"}
                    onChange={handleChange}
                  />
                  <label htmlFor="pizza">Pizza</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="ramen"
                    value="RAMEN"
                    checked={selected === "RAMEN"}
                    onChange={handleChange}
                  />
                  <label htmlFor="ramen">Ramen</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="rice"
                    value="RICE"
                    checked={selected === "RICE"}
                    onChange={handleChange}
                  />
                  <label htmlFor="rice">Rice</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="drinks"
                    value="DRINKS"
                    checked={selected === "DRINKS"}
                    onChange={handleChange}
                  />
                  <label htmlFor="drinks">Drinks</label>
                </div>
                {/* <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="drinks2"
                    value="DRINKS2"
                    checked={selected === "DRINKS2"}
                    onChange={handleChange}
                  />
                  <label htmlFor="drinks2">Drinks2</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="drinks3"
                    value="DRINKS3"
                    checked={selected === "DRINKS3"}
                    onChange={handleChange}
                  />
                  <label htmlFor="drinks3">Drinks3</label>
                </div>
                <div className="flex justify-center items-center">
                  <input
                    type="radio"
                    name="categories"
                    id="drinkss"
                    value="DRINKSS"
                    checked={selected === "DRINKSS"}
                    onChange={handleChange}
                  />
                  <label htmlFor="drinkss">Drinkss</label>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <MealsGroup category={selected} />
    </div>
  );
};

export default AvailableMeals;
