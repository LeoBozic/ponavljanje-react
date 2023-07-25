import { useState } from "react";
import "./App.css";
import PrikazVozila from "./Components/PrikazVozila";
import DodavanjeVozila from "./Components/DodavanjeVozila";

function App() {
  const [vozila, setVozila] = useState([
    { id: 1, marka: "Bmw", tip: "M4 CSL", godiste: 2023 },
    { id: 2, marka: "Porsche", tip: "911 GT3 RS", godiste: 2018 },
  ]);

  const dodavanje = ({ marka, tip, godiste }) => {
    const noviAuti = [
      ...vozila,
      { id: vozila.length + 1, marka: marka, tip: tip, godiste: godiste },
    ];
    setVozila(noviAuti);
    console.log(noviAuti);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h2>Dodavanje vozila:</h2>
      <DodavanjeVozila submit={dodavanje} />
      <h2>Vozila:</h2>
      <ul>
        {vozila.map((vozila) => (
          <li key={vozila.id}>
            <PrikazVozila
              marka={vozila.marka}
              tip={vozila.tip}
              godiste={vozila.godiste}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
