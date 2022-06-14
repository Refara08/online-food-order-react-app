import { useState, useRef, useLayoutEffect, useContext } from "react";
import gsap from "gsap";

import CartContext from "../../../store/cart-context";
import MealsPlusMins from "./MealsPlusMins";

const MealsButton = (props) => {
  const cartCtx = useContext(CartContext);

  const itemAmount = props.amount;

  const [prevAmount, setPrevAmount] = useState(0);

  const addAmount = () => {
    setPrevAmount(itemAmount);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
    });
    setTimeout(() => {
      setPrevAmount(-1);
    }, 1000);
  };

  const decreaseAmount = () => {
    cartCtx.removeItem(props.id);
    setPrevAmount(itemAmount);
    setTimeout(() => {
      setPrevAmount(-1);
    }, 1000);
  };

  const amountBtnRef = useRef();

  useLayoutEffect(() => {
    if (
      (prevAmount === 1 && itemAmount === 0) ||
      (prevAmount === 0 && itemAmount === 1)
    ) {
      gsap.fromTo(
        amountBtnRef.current,
        { opacity: 0, xPercent: -5 },
        { opacity: 1, xPercent: 0 }
      );
    }
  });

  //mode: "REGULAR", "NUM_ONLY"

  return (
    <div className="min-h-[3rem] lg:min-h-[4rem] flex justify-end items-center lg:flex-col lg:justify-center lg:items-end w-full lg:px-4">
      {itemAmount === 0 && props.mode === "REGULAR" && (
        <button
          ref={amountBtnRef}
          onClick={addAmount}
          className="amount-btn border-2 border-primary py-2 px-6 rounded-full"
        >
          Add
        </button>
      )}
      {((props.mode === "REGULAR" && itemAmount > 0) ||
        props.mode === "NUM_ONLY") && (
        <MealsPlusMins
          orientation={props.orientation}
          ref={amountBtnRef}
          onRemove={decreaseAmount}
          onAdd={addAmount}
          value={itemAmount}
        />
      )}
    </div>
  );
};

export default MealsButton;
