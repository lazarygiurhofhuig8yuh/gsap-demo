import "./App.css";

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

function App() {

  useGSAP(
    () => {
    //
    gsap.to(".box", {x:360})
  }
);

  return (
    <div className="App">
      <h1 className="title">Welcome to GSAP Animations!</h1>
      <button className="animate-btn">Click Me!</button>
      <div className="box"></div>
    </div>
  );
}

export default App;
