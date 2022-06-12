import React from "react";

const MealsPlusMins = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="amount-btn">
      <button
        onClick={props.onRemove}
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
        value={props.value}
      />
      <button
        onClick={props.onAdd}
        className="w-7 h-7 border-2 border-primary rounded-full"
      >
        +
      </button>
    </div>
  );
});

export default MealsPlusMins;
