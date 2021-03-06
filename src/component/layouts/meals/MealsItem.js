import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import BestSellerBadge from "../../utils/BestSellerBadge";
import RecomendedBadge from "../../utils/RecomendedBadge";
import MealsButton from "./MealsButton";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const item = cartCtx.items.find((item) => item.id === props.id);

  let itemAmount;
  if (item === undefined) {
    itemAmount = 0;
  } else {
    itemAmount = item.amount;
  }

  return (
    <div className="w-full lg:w-[23%] lg:h-[500px] p-4 lg:p-0 shadow-md lg:shadow-xl rounded-xl overflow-hidden border-[1px] border-neutral-200 relative">
      <div className="flex flex-row-reverse lg:flex-col justify-start items-start lg:justify-center lg:items-center gap-4 h-[125px] lg:h-auto">
        <div className="w-[175px] lg:w-auto lg:h-[250px] rounded-xl lg:rounded-none overflow-hidden">
          <img
            src={props.img}
            alt={props.name}
            className="translate-y-0 lg:-translate-y-5"
          />
        </div>
        <div className="p-0 lg:px-6 lg:pb-3 w-full">
          <h2 className="text-base lg:text-xl font-bold mb-1">{props.name}</h2>
          <div className="mb-2 lg:mb-3 flex gap-2">
            {props.isBestSeller && <BestSellerBadge />}
            {props.isRecomended && <RecomendedBadge />}
          </div>
          <p className="text-xs lg:text-base">{props.desc}</p>
          <p className="font-semibold my-2">{`Rp.${props.price.toLocaleString(
            "en-US"
          )}`}</p>
        </div>
      </div>
      <MealsButton
        mode="REGULAR"
        id={props.id}
        name={props.name}
        price={props.price}
        amount={itemAmount}
      />
    </div>
  );
};

export default MealsItem;
