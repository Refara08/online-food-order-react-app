import MealsItem from "./MealsItem";
import LIST_MENU from "../../../store/restaurant-menu";

const MealsGroup = (props) => {
  return (
    <div className="py-8 px-4 lg:px-6 flex flex-col lg:flex-row justify-start flex-wrap items-center gap-4 lg:gap-8">
      {LIST_MENU.map((item) => (
        <MealsItem
          name={item.name}
          desc={item.desc}
          price={item.price}
          img={item.URL}
          isBestSeller={item.bestSeller}
          isRecomended={item.recomended}
        />
      ))}
    </div>
  );
};

export default MealsGroup;
