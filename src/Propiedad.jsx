import { useEffect } from "react";
import { useState } from "react";

function Propiedad() {
  const [propiedad, setPropiedad] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
      .then((res) => res.json())
      .then((info) => 
      setPropiedad(info));
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="selectOption" >Selecciona un tipo de propiedad:</label>
      <select id="selectOption" value={selectedOption} onChange={handleChange} >
       <option></option>
       {propiedad.map ((propiedad) =>(
          <option key={propiedad.id} value={propiedad.id}>{propiedad.tipo}</option>
        ))}
      </select>
       
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Propiedad;
