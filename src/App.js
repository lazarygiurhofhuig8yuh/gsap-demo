import "./App.css";
import Rectangles from "./components/rectangles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="App">
      <h1 className="title">Welcome to GSAP Animations!</h1>
      <Rectangles />
    </div>
  );
}

export default App;
