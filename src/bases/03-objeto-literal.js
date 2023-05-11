


const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion:{
        ciudad: "New York",
        zip: "123",
        lat: 14.34322,
        lng: 34.54232
    }
}

//console.table({persona});

const persona2 = {...persona}
persona2.nombre = "Peter"

console.log(persona);
console.log(persona2);

