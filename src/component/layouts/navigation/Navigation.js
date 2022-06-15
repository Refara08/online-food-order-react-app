import Logo from "../../../img/Logo";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const Navigation = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full px-8 z-30 bg-secondary">
      <div className="relative container mx-auto flex justify-between items-center py-2 lg:py-6">
        <Logo />
        <DesktopLinks onOpenCart={props.onOpenCart} />
        <MobileLinks onOpenCart={props.onOpenCart} />
        {/* -------------------------- */}
      </div>
    </div>
  );
};

export default Navigation;
