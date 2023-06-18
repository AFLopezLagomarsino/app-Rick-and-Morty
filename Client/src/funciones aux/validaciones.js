let errors = {}
const validaciones = function (input){

    if(!input.email){
        errors.email = ("Maldita sea Morty, falta un correo")
    } else if (input.email.length > 35){
        errors.email = ("es demasaido largo Morty! acaso quieres que explote esta pagina Morty?!")
    }else if(!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(input.email)){
        errors.email = ("no es un correo Morty")
    } else{
        errors.email = ("Bien hecho Morty")
    }

    if(!input.password){
        errors.password = ("Maldita sea Morty, ahora falta un password")
    } else if (!/^(?=.*\d).{6,10}$/.test(input.password)){
        errors.password = ("se que son muchas condiciones para tu cerebro Morty, pero el password debe ser entre 8 y 10 caracteres y un numero Morty")
    } else{
        errors.password = ("Bien hecho Morty")
    }

    return errors
}
export default validaciones