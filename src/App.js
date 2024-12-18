import "./App.css";
import gsap from "gsap";
import Stalactite from "./components/stalactite";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <div className="App">
      <Stalactite />
    </div>
  );
}

export default App;
