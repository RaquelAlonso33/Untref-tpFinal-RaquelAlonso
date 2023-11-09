import { useEffect } from "react";
import { useState } from "react";

function Ubicacion() {
  const [ubicacion, setUbicacion] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
      .then((res) => res.json())
      .then((info) => 
      setUbicacion(info));
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form >
      <label htmlFor="selectOption" >Selecciona la ubicacion de la propiedad:</label><br/>
      <select id="selectOption" value={selectedOption} onChange={handleChange} >
       <option></option>
       {ubicacion.map ((ubicacion) =>(
          <option key={ubicacion.id} value={ubicacion.id}>{ubicacion.tipo}</option>
        ))}
      </select>
       
    </form>
    
  );
}

export default Ubicacion;
