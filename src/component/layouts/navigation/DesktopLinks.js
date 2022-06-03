import CartIcon from "../../../img/cart-icon";

const iconLinkStyle = "mx-5 grid place-items-center";

const DesktopLinks = (props) => {
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
          <span className="absolute -top-3 -right-3 rounded-full w-6 h-6 bg-red-600 text-white text-sm grid place-items-center">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesktopLinks;
