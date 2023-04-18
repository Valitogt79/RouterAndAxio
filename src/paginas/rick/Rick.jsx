import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Rick = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtenerPersonaje = async () => {
      const url = 'https://rickandmortyapi.com/api/character';
      const result = await axios.get(url);
      setPersonajes(result.data.results);
      console.log(result.data.results)
    };
    obtenerPersonaje();
  }, []);

  return (
    <div className='container py-5'>
      <h1>Listado de Personajes</h1>
      <div>
        {personajes.length === 0 && <p>Cargando...</p>}
        {personajes.map((persona, id) => {
          return (
            <div key={id}>
              <Link to={`/character/${id+1}`}>{persona.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rick;
