import { useState, useRef, useLayoutEffect, useContext } from "react";
import gsap from "gsap";

import CartContext from "../../../store/cart-context";
import MealsPlusMins from "./MealsPlusMins";

const MealsButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [amount, setAmount] = useState(0);
  const [prevAmount, setPrevAmount] = useState(0);

  const addAmount = () => {
    setPrevAmount(amount);
    setAmount((prev) => prev + 1);
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
    setPrevAmount(amount);
    setAmount((prev) => prev - 1);
    cartCtx.removeItem(props.id);
    setTimeout(() => {
      setPrevAmount(-1);
    }, 1000);
  };

  const amountBtnRef = useRef();

  useLayoutEffect(() => {
    if (
      (prevAmount === 1 && amount === 0) ||
      (prevAmount === 0 && amount === 1)
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
    <div className="min-h-[3rem] lg:min-h-[4rem] static lg:absolute lg:bottom-0 flex justify-end items-center lg:flex-col lg:justify-center lg:items-end w-full lg:pb-4 lg:px-4">
      {amount === 0 && props.mode === "REGULAR" && (
        <button
          ref={amountBtnRef}
          onClick={addAmount}
          className="amount-btn border-2 border-primary py-2 px-6 rounded-full"
        >
          Add
        </button>
      )}
      {((props.mode === "REGULAR" && amount > 0) ||
        props.mode === "NUM_ONLY") && (
        <MealsPlusMins
          ref={amountBtnRef}
          onRemove={decreaseAmount}
          onAdd={addAmount}
          value={amount}
        />
      )}
    </div>
  );
};

export default MealsButton;
