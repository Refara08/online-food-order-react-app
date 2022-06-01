import ModalOverlay from "../../utils/Modal-overlay";
import CartItem from "./CartItem";

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
  return (
    <ModalOverlay onCloseCart={props.onCloseCart}>
      <div className="px-8 pt-8 pb-3">
        <h2 className="font-bold text-3xl mb-3">Your Order</h2>
        <p className="text-xs lg:text-base border-b-[1px] border-black pb-3">
          mohon cek kembali pesanan makanan/minuman beserta jumlah yang dipesan
          sebelum mengkonfirmasi pesanan
        </p>
        <ul className="border-b-[1px] border-black py-3">
          <li className="grid grid-cols-3 px-3 font-semibold">
            <span>Jenis pesanan</span>
            <span className="justify-self-center">Jumlah</span>
            <span className="justify-self-end">Harga</span>
          </li>
        </ul>
        <ul className="cart-item border-b-[1px] border-black py-3">
          {ORDERED_ITEMS.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
            />
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4 px-3 text-lg font-semibold">
          <h2>Total Harga:</h2>
          <h2>{`Rp.${totalHarga.toLocaleString("en-US")}`}</h2>
        </div>
        <div className="flex justify-center lg:justify-end items-center mt-4">
          <button className="button green">Order</button>
          <button onClick={props.onCloseCart} className="button red">
            Close
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Cart;
