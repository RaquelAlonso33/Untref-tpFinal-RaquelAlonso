import { useEffect } from "react";
import { useState } from "react";

function Propiedad() {
  const [propiedad, setPropiedad] = useState({});

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((res) => res.json())
      .then((prop) => setPropiedad(prop));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Seleccione el tipo de propiedad</label>
      <br />
      <select>{propiedad.tipo}</select>
      <br />
      <h2>{propiedad.id}</h2>
      <button type="submit">Cotizar</button>
    </form>
  );
}

export default Propiedad;
