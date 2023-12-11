import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";

function App() {
  //aqui agregamos toda la logica que necesite el componente

  return (
    //aqui puedo agregar un poquito mas de logica
    <>
      <section className="container my-4">
        <h1 className="display-3 text-center text-primary">Contador</h1>
        <TituloSecundario />
      </section>
    </>
  );
}

export default App;
