import Propiedad from "./Propiedad";

function Home() {
  return (
    <>
      <h4>Complete los datos solicitados</h4>
      
        <Propiedad />
      {/* <form>
        <label htmlFor="ubicacion">Seleccione su ubicación</label>
        <br/><select></select><br/>
        <label htmlFor="metros">Ingrese los metros cuadrados</label>
        <br/><input type="text"></input><br/>
        <button type="submit">Cotizar</button>
      </form> */}
    </>
  );
}

export default Home;
