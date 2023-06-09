import Cards from './components/cards/Cards.jsx';
import axios from 'axios';
import Nav from "../src/components/nav/Nav.jsx"
import Detail from './components/Detail/detail';
import About from './components/About/about.jsx'
import Error404 from './components/paginaError/Error404.jsx';
import Formulario from './components/formulario/form.jsx';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Favorites from './components/favorites/favorites.jsx';
import style from '../src/app.module.css'
import { removeFav } from './funciones aux/redux/actions.js';
import { useDispatch } from 'react-redux';

function App() {

   const [characters, setCharacters] = useState([])
   const location = useLocation()
   const navigate = useNavigate();
   const [access, setAccess] = useState(true)
   const dispatch = useDispatch()
   const EMAIL = "andresinfernoxii@gmail.com"
   const PASSWORD = "titito666"


   function login(userData){
       if(userData.email === EMAIL && userData.password === PASSWORD){
          setAccess(true);
          navigate("/home")
    }
 }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters(characters.filter((character) => character.id !== Number(id)))
      //extra de react-redux se soluciona aqui con removeFavorites(id)
      dispatch(removeFav(id))
   }

   //aqui va el boton de random

   return (

      
      <div className= {style.App}>

         <NavLink to="/home" style={{textDecoration:"none",}}>
         <h1>Rick and Morty</h1>
         </NavLink>
         

         <Nav onSearch = {onSearch}/>
         


      <Routes>
      <Route path="/" element={<Formulario  login = {login}/> } />
      <Route path='/home' element = {<Cards characters={characters} onClose = {onClose} />} />
      <Route path='/detail/:id' element = {<Detail/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='*' element = {<Error404/>} />
      <Route path='/favorites' element = {<Favorites/>} />
      </Routes>

         

      </div>
   );
}

export default App;
