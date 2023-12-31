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

  return (
    <form >
      <label htmlFor="selectOption" >Selecciona un tipo de propiedad:</label><br/>
      <select id="selectOption" value={selectedOption} onChange={handleChange} >
       <option></option>
       {propiedad.map ((propiedad) =>(
          <option key={propiedad.id} value={propiedad.id}>{propiedad.tipo}</option>
        ))}
      </select>
       
    </form>
    
  );
}

export default Propiedad;
