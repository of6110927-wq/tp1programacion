import React from "react";
import MT03 from "../imagenes/images.jpg";
import Twister from "../imagenes/descarga (1).jpg";
import TRK502 from "../imagenes/descarga.jpg";

export const productosLocales = [
  {
    id: 1,
    nombre: "Yamaha MT 03",
    precio: "$11.199.000",
    categoria: "Deportiva",
    imagen: MT03,
  },
  {
    id: 2,
    nombre: "cb300 Twister",
    precio: "$7.850.000",
    categoria: "Ciudad",
    imagen: Twister,
  },
  {
    id: 3,
    nombre: "Benelli TRK 502",
    precio: "$14.510.000",
    categoria: "Viaje",
    imagen: TRK502,
  },
];
export default function ArrayPagina() {
  return (
    <div className="servicios">
      <h2 className="titulo">Productos de Aspen</h2>
      {productosLocales.map((prod) => (
        <div key={prod.id} className="card">
          <img src={prod.imagen} alt={prod.nombre} className="imagen" />
          <p className="bold">{prod.nombre}</p>
          <p>Precio: {prod.precio}</p>
          <p>Categoria: {prod.categoria}</p>
        </div>
      ))}
    </div>
  );
}
