import style from './searchbar.module.css'
import { useState } from 'react';


export default function SearchBar(props) {

   const [id, setId] = useState('')

   function handleChange(event){
      setId(event.target.value)
   }



   return (
      <div className={style.Busqueda}>
         <input type='search' onChange = {handleChange} value = {id} />
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
