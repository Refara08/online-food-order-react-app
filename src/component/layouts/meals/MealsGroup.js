import MealsItem from "./MealsItem";
import LIST_MENU from "../../../store/restaurant-menu";

const MealsGroup = (props) => {
  let showedMeal;
  if (props.category === "ALL") {
    showedMeal = LIST_MENU;
  } else {
    showedMeal = LIST_MENU.filter((item) => item.categories === props.category);
  }

  return (
    <div className="h-[550px] lg:h-auto overflow-y-scroll">
      <div className="py-8 px-4 lg:px-6 flex flex-col lg:flex-row justify-start flex-wrap items-center gap-4 lg:gap-8">
        {showedMeal.map((item) => (
          <MealsItem
            id={item.id}
            key={item.id}
            name={item.name}
            desc={item.desc}
            price={item.price}
            img={item.URL}
            isBestSeller={item.bestSeller}
            isRecomended={item.recomended}
          />
        ))}
      </div>
    </div>
  );
};

export default MealsGroup;
