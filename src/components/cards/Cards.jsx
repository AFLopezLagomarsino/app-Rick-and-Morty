import Card from '../card/Card';
import style from '../cards/cards.module.css'

export default function Cards(props) {
   const {characters, onClose} = props

   return <div className={style.Cartas}>
      {characters.map((character)=>{
      return( 
      <Card
      id ={character.id}
      name = {character.name}
      origin = {character.origin.name}
      status = {character.status}
      image = {character.image}
      species = {character.species}
      gender = {character.gender}
      key = {character.id}
      onClose= {onClose}
      character = {character}
      />
      
      )})}
   </div>;
}
