import Propiedad from "./Propiedad";
import Ubicacion from "./Ubicacion";
import { AppProvider } from "./AppContext";
import { useSharedState } from "./AppContext";
import { useState } from "react";

function Home() {
  const { selectedOption: propiedadSeleccionada, setSelectedOption } = useSharedState();
  const [ubicacion, setUbicacion] = useState('');
  const [metrosCuadrados, setMetrosCuadrados] = useState('');
  const [cotizacion, setCotizacion] = useState(null);

  const handleCotizar = () => {
    const costoM2 = 35.86;
   
    const factorMetrosCuadrados = 1.5;
    const resultadoCotizacion = metrosCuadrados * factorMetrosCuadrados * costoM2;

    setCotizacion(resultadoCotizacion);
  };

  return (
    <>
      <h4>Complete los datos solicitados</h4>
      <Propiedad />
      <Ubicacion />
      <div>
        <label htmlFor="metrosCuadrados">Ingrese los metros Cuadrados:</label><br/>
         <input type="number" id="metrosCuadrados" value={metrosCuadrados}onChange={(e) => setMetrosCuadrados(e.target.value)}
          />
      </div>
      <button onClick={handleCotizar} type="submit">Cotizar</button>
      {cotizacion !== null && (
        <div>
          <p>{`Cotización: $${cotizacion}`}</p>
        </div>
      )}
      
    </>
  );
}

export default Home;
