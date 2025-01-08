import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Stalactite() {
  const stalactiteImage =
    "https://www.clker.com/cliparts/V/u/Z/V/e/L/stalactites-md.png";
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    //shaking animation
    tl.fromTo(
      ".stalactite",
      { y: 0, opacity: 1 },
      {
        x: -10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
      }
    )
  });

  return (
    <div className="cave-container">
      <div
        className="stalactite"
        style={{
          backgroundImage: `url(${stalactiteImage})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
