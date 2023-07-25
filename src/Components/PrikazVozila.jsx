import React from "react";

function PrikazVozila({ marka, tip, godiste }) {
  return (
    <p>
      Ovo je {marka} model {tip} iz {godiste}. godine.
    </p>
  );
}

export default PrikazVozila;
