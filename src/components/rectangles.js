import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Rectangles() {
  useGSAP(() => {
    //add tweens here to animate the rectangles
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
