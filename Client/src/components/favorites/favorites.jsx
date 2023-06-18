// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { order, filter, reset } from "../../funciones aux/redux/actions";
import Cards from "../cards/Cards";

export default function Favorites(){


const dispatch = useDispatch()
const favorites = useSelector(state => state.myfavorites)

function handleSort (e) {
    dispatch(order(e.target.value))
}
function handleFilter(e){
    dispatch(filter(e.target.value))
}

function handleReset(){
    dispatch(reset())
}
    return(
        <div>
{/* esto permite generar una opcion por cada elemento del array (sirve para cuando hay muchas opciones de filtrado) */}
        <select placeholder="Gender" onChange={handleFilter}>
            {["Male", "Female", "unknown", "Genderless"].map(gender =>
                <option value={gender}>{gender}</option>)}
        </select>

        <select placeholder="Orden" onChange={handleSort}>
                {["Ascendente", "Descendente"].map(gender =>
                <option value={gender}>{gender}</option>)}

        </select>

        <button onClick={handleReset}>Reset Filter</button>


            <Cards characters = {favorites}/>
        
        </div>

    )
}


// const mapStateToProps = (state) =>{
//     return{
//     favorites: state.myfavorites,
//     }
// }

// export default connect(mapStateToProps, null)(Favorites)