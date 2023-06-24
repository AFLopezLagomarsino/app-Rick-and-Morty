import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import style from "./detail.module.css"


function Detail(){
    const {id} = useParams();
    const[character, setCharacter] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:3001/rickandmorty/character/${id}`).then((response)=> response.json())
        .then((char)=>{
            if (char.name) {
                setCharacter(char);
              } else {
                window.alert("No hay personajes con ese ID");
              }
            })
            .catch((err) => {
              window.alert("No hay personajes con ese ID");
            });
          return setCharacter({});
        }, [id]);
    
     return (
    <div className={style.Detalles}>
        
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
        <div className="details">
            <div>
                <h3>Gender:</h3>
                <p>{character.gender}</p>
            </div>
            <div>
            <h3>Status:</h3>
                <p>{character.status}</p>
            </div>
            <div>
                <h3>Specie:</h3>
            <p>{character.species}</p>
            </div>
            <div>
                <h3>origin:</h3>
            <p>{character.origin}</p>
            </div>
            <div>
                <h3>location:</h3>
            <p>{character.location}</p>
            </div>
        </div>
    </div>
    )
}
export default Detail