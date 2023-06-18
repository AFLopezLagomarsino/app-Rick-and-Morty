import { useState } from "react"
import validaciones from "../../funciones aux/validaciones"



function Formulario({login}){
    
    const [inputs, setInputs] = useState({email:"", password: ""})
    const[errors, setErrors] = useState({email:"", password: ""})

    function handleChange(event){
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })

//seteamos la funcion y que valide las mismas cosas que el handle changge para que sea una evaluacion dinamica
        setErrors(validaciones({  
            ...inputs,
            [event.target.name]: event.target.value
        }))
    }
 
        
    function submitHandler(event){
        event.preventDefault(inputs)
     if((errors.email === "Bien hecho Morty") && (errors.password === "Bien hecho Morty")){
         login(inputs)
        }else{
        alert("Te confundiste Morty...")
        }
    }


    return (

        <form >

            <div>
        <label >Email: </label>
            <input type="text" placeholder="ingresa un correo" name="email" value={inputs.email} onChange={handleChange}/>
        <span>{errors.email}</span>
            </div>
            <div>
        <label >Password: </label>
                <input type="password" placeholder="ingesa una contraseña" name="password" value={inputs.password} onChange={handleChange}/>
        <span>{errors.password}</span>
            </div>
        <button type="Submit" onClick={submitHandler}>Submit</button>

        </form>
    )
}

export default Formulario