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

   async function login(userData) {
      try{
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data}= await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
      
      } catch (error){
         console.log(error)
      }
   }


   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {

      try{
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         const data = response.data
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
            }
      } catch (error){
         console.log(error)
      }
   }

   function onClose(id){
      setCharacters(characters.filter((character) => character.id !== Number(id)))
      //extra de react-redux se soluciona aqui con removeFavorites(id)
      dispatch(removeFav(id))
   }

   async function randomHandler() {   
      let haveIt=[] 
      let random=Math.floor(Math.random()*826)    //genero un numero random entre 0-826 y lo redondeo
      try {
         if(!haveIt.includes(random)){    //si el array no incluye el numero random
            haveIt.push(random);          //lo agrego al array y lo muestro
            const {data}= await axios(`http://localhost:3001/rickandmorty/character/${random}`)
            if (data.name && !characters.find((char)=>char.id===data.id)){
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert("Personaje agregado!");
            }
         } else return false
      } catch (error) {
         console.log(error)
      }  
   }

   return (

      
      <div className= {style.App}>

         <NavLink to="/home" style={{textDecoration:"none",}}>
         <h1>Rick and Morty</h1>
         </NavLink>
         
         <Nav onSearch = {onSearch} random = {randomHandler}/>
      
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
