//Desestructuración
//Asignación Desestructurante

const persona ={
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
};

// const {edad, clave, nombre} = persona

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usContext = ({clave, nombre, edad, rango = 'Vengador'}) => {
    // console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 12.123,
            lng: -42.1323
        }

    }

}

const {nombreClave, años, latlng :{lat, lng}} = usContext  ( persona );
console.log(nombreClave, años);
console.log(lat, lng);