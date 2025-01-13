import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AnimatedButton2({ classNames, children }) {
  //get our context from the useGSAP hook
  const { contextSafe } = useGSAP();

  //wrap tweens in the context function and save it in a variable
  const onClickAnimations = contextSafe(({ currentTarget }) => {
    const tl = gsap.timeline()
    tl.to(currentTarget, {
        z: 100,
        duration: 1,
        scale: 1.3,
    }).to(currentTarget, {
     z: 0,
     scale: 1,
     duration: 1
    }
    );
  });

  return (
    //attach the variable to the click event listener
    <button onClick={onClickAnimations} className={classNames}>
      {children}
    </button>
  );
}
