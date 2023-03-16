// class Persona {
//     nombre
//     peso
//     estatura
//     edad
//     cedula

//     constructor(nombre,peso,estatura,edad,cedula){
//         this.nombre = nombre
//         this.peso = peso
//         this.estatura = estatura
//         this.edad = edad
//         this.cedula = cedula
//     }

//     calcularImc(){
//         const imc = this.peso/(this.estatura*this.estatura)
//         return imc
//     }

//     info(){
//         const info = `Nombre:   ${this.nombre} \nCedula:  ${this.cedula}`
//         return info
//     }
        
// }

// const santiago = new Persona('santiago', 70, 1.65, 19, 1097488058)
// const steven = new Persona('steven', 60, 1.70, 19)
// const samuel = new Persona('samuel', 50, 1.50, 18)
// const personas = {
//     santiago,
//     steven, 
//     samuel
// }


// console.log(santiago.info());
let nombre = document.getElementById('Nombre');
let apellidos = document.getElementById('Apellido');
let fecha = document.getElementById('fecha');
let cedula = document.getElementById('cedula');
let boton = document.getElementById('boton');
let validar = document.getElementById('validar')
const resultado = []

 class Persona {
    nombre
    apellidos
    cedula
    edad
    fechanacimiento

    constructor(apellidos, cedula, edad, fechanacimiento, nombre){
        this.nombre = nombre
        this.apellidos = apellidos
        this.cedula = cedula
        this.edad = edad
        this.fechanacimiento = fechanacimiento
    }

    nombreCompleto(){

    }

    cumpleaños(){

    }

 }

 boton.addEventListener("click", () => {
    let fechaActual = new Date()
    let fechaNacimiento = new Date(fecha.value)
    edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
    const mostrar = new Persona(apellidos.value, cedula.value,edad, fecha.value   ,nombre.value)
    if(apellidos.value != "" && cedula.value != "" && edad != "" && fecha.value != "" && nombre.value != "" ){
        resultado.push(mostrar)
    }else{
            
        validar.innerHTML = `NGRESE DATOS EN LOS CAMPOS`
    }
    console.log(mostrar);

    

 })


