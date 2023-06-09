import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { addFav, removeFav } from '../../funciones aux/redux/actions';
import style from './card.module.css'

function Card(props) {
   const navigate = useNavigate()
   const {character, onClose, addFav, removeFav, favorites} = props;
   const [isFav, setFav] = useState(false)
   const [closeBtn, setCloseBtn] = useState(true)


   useEffect(()=>{
      if(!onClose){
         setCloseBtn(false)
      }
   },[])
   
   function navigateHandler(){
      navigate(`/detail/${character.id}`)
   }
   
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === props.id) {
            setFav(true);
         }
      });
   }, [favorites]);
   

   function handlerFavorite(character){
   if(!isFav){
         addFav(character)
         setFav(true)
      } else{
         removeFav(character)
         setFav(false)
      }
   }


   return (
      <div className={style.Carta}>
         {closeBtn && <button onClick={() => {onClose(character.id);}}>X</button>}
         <h2>{character.name}</h2>
         <img src={character.image} alt= {character.name} onClick={navigateHandler}/>

         {isFav ? (<button onClick={() => handlerFavorite(character.id)}>❤️</button>) 
         :(<button onClick={() => handlerFavorite(character)}>🤍</button>)
         }
      </div>
   );
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => dispatch(addFav(character)),

      removeFav: (id) => dispatch(removeFav(id)),
   }
}
const mapStateToProps = (state) =>{

   return{
      favorites: state.myfavorites,
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)