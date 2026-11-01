import React from "react";
import Formulario from "../Datos/Formulario";
import Mapa from "../Datos/mapa";
export default function Contacto() {
  return (
    <div className="contactoPagina">
      <h2>Contacto y Ubicación</h2>
      <div className="contactoColumnas">
        <div className="columnaFormulario">
          <h3>contactanos</h3>
          <Formulario />
        </div>
        <Mapa />
      </div>
    </div>
  );
}
