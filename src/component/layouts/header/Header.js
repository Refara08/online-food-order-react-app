import headerImg from "../../../img/header.jpg";
import RightArrow from "../../../img/right-arrow";

const Header = () => {
  return (
    <div className="bg-secondary h-auto pt-24 lg:pt-32 flex items-center">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-center gap-4">
        <div className="p-2 basis-1/2 flex justify-end items-center">
          <div className="px-8">
            <h1 className="text-3xl lg:text-5xl mb-3 lg:mb-5 pr-[30%] lg:pr-0 font-semibold">
              Meet eat and enjoy the true taste
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              incidunt eveniet exercitationem ipsam distinctio omnis unde vel
              dignissimos cumque quod!
            </p>
            <button className="button main flex items-center justify-between gap-4">
              Explore Menu <RightArrow size="1.5em" />
            </button>
          </div>
        </div>
        <div className="h-[350px] lg:h-[600px] lg:basis-1/2 overflow-hidden lg:rounded-tl-[15%]">
          <img
            className="object-cover object-bottom lg:-translate-y-14"
            src={headerImg}
            alt="people holding pizza"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
