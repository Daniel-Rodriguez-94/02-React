
const saludar = function(nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`


// console.log(saludar("Goku"));

console.log(saludar2("Vegueta"));
console.log(saludar3("Goku"));
console.log(saludar4());


const getUser = () =>({
        uid: "ABC123",
        username: "Kakaroto_123"
    })


const user = getUser();
console.log(user);

//Tarea
//1. Transformar a una función de flecha
//2. Tiene que retornar un objeto implícito 
//3. Pruebas 

/* function getUsuarioActivo( nombre ){
    return{
        uid: "ABC567",
        username: nombre
    }
} */


const getUsuarioActivo = ( nombre ) => ({
        uid: "ABC567",
        username: nombre
    }
)

const usuarioActivo = getUsuarioActivo("Daniel")
console.log(usuarioActivo);