import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnimatedHeader({ classNames, children }) {
  useGSAP(() => {
    gsap.from(".animated-header", {
      //here we define the animation (change opacity and the y position)
      duration: 1.25,
      y: -20,
      opacity: 0,
      // here we define the scroll trigger configuration
      scrollTrigger: {
        trigger: ".animated-header", //the 'trigger' is the element used as a reference point for the scroll position which will trigger the animation
        start: "top center", //used to fine tone the reference point (the top of the header touches the center of the view, start the animation)
        markers: false, //when true, displays markers for the start and end positions
      },
    });
  });

  return (
    //attach the variable to the click event listener
    <h1 className={`animated-header ${classNames}`}>{children}</h1>
  );
}
