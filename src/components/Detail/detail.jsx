import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./detail.module.css"


function Detail(){
    const {id} = useParams();
    const[character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    
     return (
        <div className={style.Detalles}>
        
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <div>
            <h3>Status:</h3>
                <p>{character.status}</p>
            </div>
            <div>
                <h3>Specie</h3>
            <p>{character.species}</p>
            </div>
            <div>
                <h3>origin:</h3>
            <p>{character.origin?.name}</p>
            </div>
            <div>
                <h3>location:</h3>
            <p>{character.location?.name}</p>
            </div>
        </div>
    )
}

export default Detail