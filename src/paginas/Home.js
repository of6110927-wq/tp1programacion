import React, { useState, useEffect } from "react";

export default function Home() {
  const [pokemones, setPokemones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=3")
      .then((res) => res.json())
      .then(async (data) => {
        const detallesPromises = data.results.map(async (poke) => {
          const resPoke = await fetch(poke.url);
          return await resPoke.json();
        });
        const resultadosCompletos = await Promise.all(detallesPromises);
        setPokemones(resultadosCompletos);
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ padding: 20 }}>Cargando PokAPI...</p>;
  }

  return (
    <div className="container-scroll">
      <h2 className="titulo">PokAPI</h2>
      {pokemones.map((p) => (
        <div key={p.id} className="card">
          <img src={p.sprites.front_default} alt={p.name} className="imagen" />
          <p className="bold">Nombre: {p.name.toUpperCase()}</p>
          <p>Número Pokedex: #{p.id}</p>
          <p>Experiencia Base: {p.base_experience}</p>
        </div>
      ))}
    </div>
  );
}
