import "./App.css";
import Logo from "./componentes/Logo";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App () {
  return (
    <div className="App">
      <Logo />
      <div className="contenedor-principal">
        <div className="tarea-lista-contenedor">
          <h1>Mis tareas</h1>
          <ListaDeTareas />
        </div>
      </div>
    </div>
  );
}

export default App;