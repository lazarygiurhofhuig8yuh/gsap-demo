import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Rectangles() {
  const frequencies = [8, 4, 2, 1];
  useGSAP(() => {
    //red rect
    gsap.to(".rect1", {
      y: -100, // bounce height
      duration: 1 / frequencies[0], //bounce duration
      repeat: -1, //negative repeat values means repeat forever
      yoyo: true, //means what it sounds
      ease: "power1.inOut", //ease creates the springy effect (look up other ease types)
    });

    //yellow

    //green

    //blue
  });
  return (
    <div className="container">
      <div className="rect1">Rectangle 1</div>
      <div className="rect2">Rectangle 2</div>
      <div className="rect3">Rectangle 3</div>
      <div className="rect4">Rectangle 4</div>
    </div>
  );
}
