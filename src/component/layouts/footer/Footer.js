import Logo from "../../../img/Logo";
import InstagramIcon from "../../../img/instagram-icon";
import WhatsappIcon from "../../../img/whatsapp-icon";
import EmailIcon from "../../../img/email-icon";
import WavesDown from "../../../img/waves-down";

const Footer = () => {
  return (
    <>
      <div className="-scale-y-100">
        <WavesDown />
      </div>
      <div className="py-8 lg:py-24 lg:pl-24 bg-secondary">
        <div className="container mx-auto px-6 lg:flex lg:justify-start lg:items-center lg:gap-24">
          <div className="mb-8 lg:mb-2">
            <Logo />
            <p className="hidden lg:block font-semibold text-xs lg:text-sm lg:mt-2">
              Copyright 2022 &copy; Allright Reserved. Hungray.
            </p>
          </div>
          <ul className="links mb-12 lg:mb-0 flex flex-col gap-3">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <div className="text-center flex flex-col gap-4">
            <ul className="flex justify-center items-center lg:flex-col lg:items-start gap-4">
              <li>
                <a href="/" className="flex items-center gap-2">
                  <InstagramIcon />
                  <span className="hidden lg:block">Instagram</span>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center gap-2">
                  <WhatsappIcon />
                  <span className="hidden lg:block">Whatsapp</span>
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center gap-2">
                  <EmailIcon /> <span className="hidden lg:block">Email</span>
                </a>
              </li>
            </ul>
            <p className="block lg:hidden font-semibold text-xs lg:text-sm">
              Copyright 2022 &copy; Allright Reserved. Hungray.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
