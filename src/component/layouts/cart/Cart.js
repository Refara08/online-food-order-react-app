import { useContext } from "react";
import CartContext from "../../../store/cart-context";

import ModalOverlay from "../../utils/Modal-overlay";
import CartItem from "./CartItem";
import CloseICon from "../../../img/close-icon";

const ORDERED_ITEMS = [
  {
    id: "m6",
    name: "Oyakodon",
    amount: 2,
    price: 48000,
  },
  {
    id: "m7",
    name: "Takoyaki",
    amount: 1,
    price: 22000,
  },
  {
    id: "m6",
    name: "Ramen",
    amount: 2,
    price: 35000,
  },
  {
    id: "m6",
    name: "Ice Water",
    amount: 2,
    price: 8000,
  },
];

let totalHarga = 0;

ORDERED_ITEMS.forEach((item) => {
  totalHarga += item.price * item.amount;
  return totalHarga;
});

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartLayout = (
    <div className="p-4 lg:p-8 h-screen lg:h-[700px] flex flex-col ">
      <div className="flex-[1]">
        <div className="flex flex-row-reverse items-center gap-4">
          <button onClick={props.onCloseCart}>
            <CloseICon />
          </button>
          <div className="flex-[1] grid place-items-center">
            <h2 className="font-bold">Hungray - Meja 2 Lt.2</h2>
          </div>
        </div>

        <div className="pt-8 ">
          <h2 className="font-bold text-lg">Pesanan untuk</h2>
          <form>
            <div className="order-sum-input-group">
              <label htmlFor="nama">Atas Nama</label>
              <input type="text" name="nama" id="nama" />
            </div>
            <div className="order-sum-input-group">
              <label htmlFor="noHp">no. Handphone</label>
              <input type="number" name="noHp" id="noHp" />
            </div>
          </form>
        </div>

        <div className="pt-8">
          <h2 className="font-bold text-lg">Order Summary</h2>
          <ul className="h-[400px] lg:h-[300px] overflow-y-scroll">
            {cartCtx.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </ul>
        </div>

        {/* <div className="py-4">
          <h2 className="">Choose Payment methode</h2>
          <ul>
            <li>OVO</li>
            <li>Gopay</li>
            <li>QRIS</li>
            <li>m-Banking</li>
            <li>Cash</li>
          </ul>
        </div> */}
      </div>

      <div className="flex flex-col gap-4  border-t-[1px] border-neutral-300 py-4">
        <div className="flex justify-between items-center">
          <h3>Total</h3>
          <h2 className="font-semibold text-xl">{`Rp.${cartCtx.totalAmount.toLocaleString(
            "en-US"
          )}`}</h2>
        </div>
        <button className="bg-primary w-full rounded-lg py-2 font-bold text-lg tracking-wide">
          Place Order
        </button>
      </div>
    </div>
  );

  return (
    <ModalOverlay onCloseCart={props.onCloseCart}>
      {cartCtx.items.length === 0 ? (
        <div className="p-4">
          <h2>You haven't added anything yet</h2>
        </div>
      ) : (
        cartLayout
      )}
    </ModalOverlay>
  );
};

export default Cart;
