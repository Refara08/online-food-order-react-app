import { useContext, useLayoutEffect, useState } from "react";

import CartIcon from "../../../img/cart-icon";
import CartContext from "../../../store/cart-context";

const iconLinkStyle = "mx-5 grid place-items-center";

const DesktopLinks = (props) => {
  const cartCtx = useContext(CartContext);

  const cartBadgeNum = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const [isBadgeActive, setIsBadgeActive] = useState(false);

  useLayoutEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setIsBadgeActive(true);

    const timer = setTimeout(() => {
      setIsBadgeActive(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <div className="links-desktop hidden lg:flex items-center">
      <a className="regular-link link-active" href="/">
        Home
      </a>
      <a className="regular-link" href="/">
        About Us
      </a>
      <a className="regular-link" href="/">
        Menu
      </a>
      <a className="regular-link" href="/">
        Contact
      </a>
      <a className="regular-link" href="/">
        Sign In
      </a>
      <a className="regular-link" href="/">
        Sign Up
      </a>
      <div className={iconLinkStyle}>
        <div
          onClick={props.onOpenCart}
          className="bg-primary p-2 rounded-lg relative cursor-pointer"
        >
          <CartIcon />
          {cartBadgeNum > 0 && (
            <span
              className={`absolute -top-3 -right-3 rounded-full w-6 h-6 bg-red-600 text-white text-sm grid place-items-center ${
                isBadgeActive ? "animate-bump" : ""
              }`}
            >
              {cartBadgeNum}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopLinks;
