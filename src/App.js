import "./App.css";

import AnimatedHeader from "./components/header";
function App() {
  return (
    <div className="App">
      <img
        src="https://cdn.britannica.com/15/15-050-B075588A/Flag-Kenya.jpg"
        alt="Kenyan Flag"
      />
      <AnimatedHeader classNames={"message"}>Karibu Kenya</AnimatedHeader>
      <img
        src="https://cdn.britannica.com/15/15-050-B075588A/Flag-Kenya.jpg"
        alt="Kenyan Flag"
      />
    </div>
  );
}

export default App;
