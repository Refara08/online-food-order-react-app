import { useState } from "react";

import Cart from "./component/layouts/cart/Cart";
import Navigation from "./component/layouts/navigation/Navigation";
import Header from "./component/layouts/header/Header";
import AvailableMeals from "./component/layouts/meals/AvailableMeals";
import WavesDown from "./img/waves-down";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCartHandler = () => {
    setIsCartOpen(false);
  };

  const openCartHandler = () => {
    setIsCartOpen(true);
  };

  return (
    <div className="App font-poppins text-black">
      {isCartOpen && <Cart onCloseCart={closeCartHandler} />}
      <Navigation onOpenCart={openCartHandler} />
      <Header />
      <WavesDown />
      <AvailableMeals />
      <div className="h-[1500px]">scroller....</div>
    </div>
  );
}

export default App;
