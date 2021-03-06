import * as ReactDOM from "react-dom";
import Card from "./Card";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-40"
      onClick={props.onCloseCart}
    />
  );
};

const Overlay = (props) => {
  const overlayRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
        yPercent: 1,
      },
      { opacity: 1, yPercent: 0 }
    );
  }, []);

  return (
    <div
      ref={overlayRef}
      className="z-40 fixed top-0 left-0 transform-none w-full max-h-screen lg:top-40 lg:left-1/3 lg:w-[600px] "
    >
      <Card>{props.children}</Card>
    </div>
  );
};

const ModalOverlay = (props) => {
  const portalOverlays = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalOverlays
      )}
      {ReactDOM.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalOverlays
      )}
    </>
  );
};

export default ModalOverlay;
