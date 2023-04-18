import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Character = () => {
  const [personaje, setPersonaje] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const obtenerPersonaje = async () => {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      const result = await axios.get(url);
      setPersonaje(result.data)
    }
    
    obtenerPersonaje()
  
  }, [])


  return (
    <div className='container py-5'>
        <h2> Informacion del Usuario {personaje.id}</h2><br />
         <h4>Nombre: {personaje.name}</h4>
         <h4>Status: {personaje.status}</h4>
         <h4>Especie: {personaje.species}</h4>
         <img src={personaje.image} alt="" />
         <br />
        <Link to='/rick' className="btn btn-primary mt-5">Regresar</Link>
      
    </div>
        );
      }
  


export default Character;
