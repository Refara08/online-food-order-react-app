import UtensilsIcon from "../../../img/utensils-icon";
import DesktopLinks from "./DesktopLinks";
import MobileLinks from "./MobileLinks";

const Navigation = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full px-8 z-30 bg-secondary">
      <div className="relative container mx-auto flex justify-between items-center py-2 lg:py-6">
        <h1 className="font-bold text-2xl md:text-4xl font-inter flex">
          <span>
            <UtensilsIcon color="#FFBB44" />
          </span>
          &nbsp;hungray
        </h1>
        <DesktopLinks onOpenCart={props.onOpenCart} />
        <MobileLinks onOpenCart={props.onOpenCart} />
        {/* -------------------------- */}
      </div>
    </div>
  );
};

export default Navigation;
