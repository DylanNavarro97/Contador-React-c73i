import { useState } from "react";

export default function Contador() {
  let [numero, setNumero] = useState(10);

  return (
    <article className="text-center">
      <h2>Contador</h2>
      <h3>{numero}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumero(numero + 1);
        }}
      >
        +1
      </button>
    </article>
  );
}
