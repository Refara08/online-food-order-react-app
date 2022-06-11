import { useState, useRef, useContext, useLayoutEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import gsap from "gsap";

import CartIcon from "../../../img/cart-icon";
import CartContext from "../../../store/cart-context";

const MobileLinks = (props) => {
  const cartCtx = useContext(CartContext);

  const cartBadgeNum = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const mobileNavRef = useRef();
  const q = gsap.utils.selector(mobileNavRef);

  const togglingHam = () => {
    !isHamburgerActive
      ? gsap
          .timeline()
          .fromTo(
            mobileNavRef.current,
            {
              display: "hidden",
              yPercent: -35,
              opacity: 0,
              scaleY: 0.3,
              ease: "power4.in",
            },
            {
              display: "block",
              yPercent: 0,
              opacity: 1,
              scaleY: 1,
              duration: 0.3,
            }
          )
          .fromTo(
            q("a"),
            {
              yPercent: -20,
              opacity: 0,
            },
            {
              yPercent: 0,
              opacity: 1,
              stagger: 0.1,
            },
            "<0.2"
          )
      : gsap
          .timeline()
          .fromTo(
            q("a"),
            {
              yPercent: 0,
              opacity: 1,
            },
            {
              yPercent: -20,
              opacity: 0,
              stagger: 0.1,
            }
          )
          .fromTo(
            mobileNavRef.current,
            {
              display: "block",
              yPercent: 0,
              opacity: 1,
              scaleY: 1,
              ease: "power4.out",
            },
            {
              display: "hidden",
              yPercent: -35,
              opacity: 0,
              scaleY: 0.3,
              duration: 0.3,
            },
            "<0.7"
          );
  };

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
    <>
      <div className="block lg:hidden">
        <Hamburger
          toggled={isHamburgerActive}
          toggle={setIsHamburgerActive}
          size={24}
          color="#333"
          easing="ease-out"
          rounded
          onToggle={togglingHam}
        />
      </div>
      {cartBadgeNum > 0 && (
        <div className="cart-mobile">
          <div className="container mx-auto flex justify-end px-8">
            <div
              onClick={props.onOpenCart}
              className="bg-primary p-2 rounded-lg relative cursor-pointer"
            >
              <CartIcon />
              <span
                className={`absolute -top-3 -right-3 rounded-full w-6 h-6 bg-red-600 text-white text-sm grid place-items-center ${
                  isBadgeActive ? "animate-bump" : ""
                }`}
              >
                {cartBadgeNum}
              </span>
            </div>
          </div>
        </div>
      )}
      <div
        ref={mobileNavRef}
        className="hidden lg:hidden absolute top-16 left-0 opacity-0 w-full aspect-[2/3] md:aspect-square bg-black rounded-b-2xl"
      >
        <div className="flex flex-col justify-evenly items-center h-full">
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
        </div>
      </div>
    </>
  );
};

export default MobileLinks;
