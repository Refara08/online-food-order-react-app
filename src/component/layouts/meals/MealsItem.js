import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import BestSellerBadge from "../../utils/BestSellerBadge";
import RecomendedBadge from "../../utils/RecomendedBadge";

const MealsItem = (props) => {
  const [amount, setAmount] = useState(0);

  const addAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    setAmount((prev) => prev - 1);
  };

  const amountBtnRef = useRef();

  useLayoutEffect(() => {
    if (amount < 2) {
      gsap.fromTo(
        amountBtnRef.current,
        { opacity: 0, xPercent: -5 },
        { opacity: 1, xPercent: 0 }
      );
    }
  });

  return (
    <div className="w-full lg:w-[300px] lg:h-[500px] p-4 lg:p-0 shadow-md lg:shadow-xl rounded-xl overflow-hidden border-[1px] border-neutral-200 relative">
      <div className="flex flex-row-reverse lg:flex-col justify-start items-start lg:justify-center lg:items-center gap-4">
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
      <div className="min-h-[3rem] lg:min-h-[4rem] static lg:absolute lg:bottom-0 flex justify-end items-center lg:flex-col lg:justify-center lg:items-end w-full lg:pb-4 lg:px-4">
        {amount === 0 && (
          <button
            ref={amountBtnRef}
            onClick={addAmount}
            className="amount-btn border-2 border-primary py-2 px-6 rounded-full"
          >
            Add
          </button>
        )}
        {amount > 0 && (
          <div ref={amountBtnRef} className="amount-btn">
            <button
              onClick={decreaseAmount}
              className="w-7 h-7 border-2 border-primary rounded-full"
            >
              -
            </button>
            <input
              className="input-amount w-[3ch] text-center"
              type="number"
              name="amount"
              id="amount"
              min={0}
              disabled
              value={amount}
            />
            <button
              onClick={addAmount}
              className="w-7 h-7 border-2 border-primary rounded-full"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealsItem;
