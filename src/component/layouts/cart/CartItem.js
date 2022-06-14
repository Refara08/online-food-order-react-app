import MealsButton from "../meals/MealsButton";
import EditIcon from "../../../img/edit-icon";

const CartItem = (props) => {
  const itemPrice = props.price * props.amount;

  return (
    <li className="flex flex-col justify-center items-start p-3">
      <div className="flex flex-col">
        <span className="flex-[1] font-semibold text-lg">{props.name}</span>
        <div className="flex justify-start items-center gap-4">
          <span className="text-xs">note: mau additional cheese</span>
          <button className="flex items-center justify-center gap-1 text-xs border-[1px] border-neutral-400 rounded-full px-2 py-1">
            <EditIcon />
            <span>edit</span>
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <span className="">
          <MealsButton
            mode="NUM_ONLY"
            id={props.id}
            name={props.name}
            price={props.price}
            amount={props.amount}
            orientation="flex-row"
          />
        </span>
        <span className="justify-self-end">{`Rp.${itemPrice.toLocaleString(
          "en-US"
        )}`}</span>
      </div>
    </li>
  );
};

export default CartItem;
