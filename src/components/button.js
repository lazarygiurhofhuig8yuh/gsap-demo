import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function AnimatedButton({ classNames, children }) {
  //get our context from the useGSAP hook
  const { contextSafe } = useGSAP();

  //wrap tweens in the context function and save it in a variable
  const onClickAnimations = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  return (
    //attach the variable to the click event listener
    <button onClick={onClickAnimations} className={classNames}>
      {children}
    </button>
  );
}
