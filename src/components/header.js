import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnimatedHeader({ classNames, children }) {
  const headerRef = useRef(); //usefull if this component is used multiple times in the website
  useGSAP(() => {
    const el = headerRef.current;
    const splitWords = el.querySelectorAll(".animated-header span"); //we are splitting the words into letters and animating each letter one at a time

    // Letters animation
    gsap.from(splitWords, {
      opacity: 0,
      stagger: 0.1, // Add a delay between each letter
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "top +=200",
        scrub: true, // Smooth animation with scroll position
        markers: true,
      },
    });
  });

  return (
    <h1 className={`animated-header ${classNames}`} ref={headerRef}>
      {children.split("").map((letter, index) => (
        <span key={index} style={{ display: "inline-block" }}>
          {letter}
        </span>
      ))}
    </h1>
  );
}
