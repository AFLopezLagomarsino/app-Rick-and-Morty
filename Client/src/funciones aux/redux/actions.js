import axios from "axios"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const RESET = "RESET"


export const addFav = (character) => {
   try{
      const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {
          const {data} = await axios.post(endpoint, character)
             return dispatch({
                type: ADD_FAV,
                payload: data,
             });
       };

   // eslint-disable-next-line no-unreachable
   }catch (error){
      console.log(error)
   }
 };

 export const removeFav = (id) => {
   try {
      const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return async (dispatch) => {
          const {data} = await axios.delete(endpoint)
             return dispatch({
                type: REMOVE_FAV,
                payload: data,
          });
       };

   } catch (error) {
      console.log(error)
   }
 };
export function filter(gender){
return {
        type: FILTER,
        payload:gender
    }
}
export function order(order){
    return {
        type: ORDER,
        payload:order,
    }
}

export function reset(){
    return{
    type: RESET,
    }
}