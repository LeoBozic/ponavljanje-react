import React, { useState } from "react";

function DodavanjeVozila({ submit }) {
  const [marka, setMarka] = useState("");
  const [tip, setTip] = useState("");
  const [godiste, setGodiste] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (marka && tip && godiste) {
      submit({ marka, tip, godiste: Number(godiste) });
      setMarka("");
      setTip("");
      setGodiste("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Marka: </label>
        <input
          type="text"
          value={marka}
          onChange={(e) => setMarka(e.target.value)}
        />
      </p>
      <p>
        <label>Model: </label>
        <input
          type="text"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        />
      </p>
      <p>
        <label>Godište: </label>
        <input
          type="text"
          value={godiste}
          onChange={(e) => setGodiste(e.target.value)}
        />
      </p>
      <button type="submit">Dodaj vozilo</button>
    </form>
  );
}

export default DodavanjeVozila;
