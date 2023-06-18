import { ADD_FAV, REMOVE_FAV, ORDER, FILTER, RESET } from "./actions"



let initialState = {
    myfavorites: [],
    allCharacters:[]
}

export default function rootReducer(state = initialState, action){
    switch(action.type){

        case ADD_FAV:
            const added = [...state.myfavorites, action.payload]
            return {
                ...state,
                myfavorites: [...added],
                allCharacters:[...added]
            }
        case REMOVE_FAV:

            const remove = state.myfavorites.filter(character => character.id !== Number(action.payload))
            return {
                ...state,
                myfavorites: [...remove] 
            }
        
        case ORDER:
            let ordenados;
            if(action.payload === "Ascendente"){
                ordenados = state.myfavorites.sort((a,b) => a.id > b.id ? 1 : -1 )
            } else{
                ordenados = state.myfavorites.sort((a,b) => b.id > a.id ? 1 : -1 ) 
            }
        return{
            ...state,
            myfavorites: [...ordenados]
            }
            
            
        case FILTER:
            return{
                ...state,
                //allcharacters sirve para array copia donde se va a introducir el filtrado
                myfavorites: state.allCharacters.filter(character => character.gender === action.payload)
            }
        case RESET:
            return{
                ...state,
                myfavorites: state.allCharacters,
            }
        
        default:
            return{...state}
    }
}