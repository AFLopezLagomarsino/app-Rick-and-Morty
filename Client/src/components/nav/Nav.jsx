import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import style from "./Nav.module.css"
import { useState, useEffect } from "react";

function Nav(props){
    const [mostrarBusqueda,setMostrarBusqueda] = useState(false)
    const location = useLocation()

    useEffect(() =>{
      if(location.pathname === "/home"){
        setMostrarBusqueda(true)
    }else{
      setMostrarBusqueda(false)
    }
  },[location] )


  return (
        <div className={style.nav}>
           {mostrarBusqueda && <SearchBar onSearch = {props.onSearch} random={props.random}/> } 
          <div>
            <Link to ="/about">
                <button className="botonAbout">about</button>
            </Link>
            <Link to ="/favorites">
              <button className="botonFav">Favorites</button>
            </Link>
          </div>
        </div>
)}

export default Nav