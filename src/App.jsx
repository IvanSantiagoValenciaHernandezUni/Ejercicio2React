import { useState } from "react";
import "./App.css";
import Otro from "./Otro";
import JefeMaestro from "./JefeMaestro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Arroz con Pollo</h1>
      <p>El mejor</p>
      <Otro />
      <JefeMaestro />
    </div>
  );
}

export default App;
