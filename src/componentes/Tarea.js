import React from "react";
import "../estilos/Tarea.css";
import { AiTwotoneDelete } from "react-icons/ai";

function Tarea ({ id, completada, texto, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-iconos" onClick={() => eliminarTarea(id)}>
        <AiTwotoneDelete className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;