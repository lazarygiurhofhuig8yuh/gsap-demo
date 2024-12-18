import "./App.css";

import AnimatedButton from "./components/button";
function App() {
  return (
    <div className="App">
      <AnimatedButton classNames={"blue button"}>Blue</AnimatedButton>
      <AnimatedButton classNames={"red button"}> Red</AnimatedButton>
      <AnimatedButton classNames={"green button"}>Green</AnimatedButton>
    </div>
  );
}

export default App;
