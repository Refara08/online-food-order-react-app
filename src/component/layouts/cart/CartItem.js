const CartItem = (props) => {
  const itemPrice = props.price * props.amount;

  return (
    <li className="grid grid-cols-3 px-3">
      <span>{props.name}</span>
      <span className="justify-self-center">{props.amount}</span>
      <span className="justify-self-end">{`Rp.${itemPrice.toLocaleString(
        "en-US"
      )}`}</span>
    </li>
  );
};

export default CartItem;
