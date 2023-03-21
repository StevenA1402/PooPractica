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

//NUEVO EJERCICIO



let nombre = document.getElementById("Nombre");
let apellidos = document.getElementById("Apellido");
let fecha = document.getElementById("fecha");
let cedula = document.getElementById("cedula");
let boton = document.getElementById("boton");
let validar = document.getElementById("validar");
let formulario = document.getElementById("formulario");
let nombrecompleto = document.getElementById("nombrecompleto");
let fechacumpleaños = document.getElementById("fechacumpleaños");
let identificacion= document.getElementById("identificacion"
  );





const datosLocal = []
const resultado = [];
const personas = []
const cedulas = []

class Persona {
  nombre;
  apellidos;
  cedula;
  edad;
  fechanacimiento;

  constructor(apellidos, cedula, edad, fechanacimiento, nombre) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.cedula = cedula;
    this.edad = edad;
    this.fechanacimiento = fechanacimiento;
  }



  nombreCompleto() {
    return this.nombre + "" + this.apellidos
    
  }

  cumpleaños(hola) {
    let date = new Date()
    let mesActual = date.getMonth() + 1
    let diaActual = date.getDate()
    let mesNacimiento = parseFloat(hola.slice(5, 8)) 
    let diaNacimiento = parseFloat(hola.slice(8, 11))
    if(mesActual == mesNacimiento && diaActual == diaNacimiento){
      Swal.fire(
        'Feliz cumpleaños!',
        'Espero que tengas un excelente dia!',
        'success'
      )
      return "si"
    }else{
        return "no"
    }
  }
}



function noRefrescar(e) {
    e.preventDefault()
} 

formulario.addEventListener('submit' , noRefrescar )



buscar.addEventListener('click', () => {

  cedulas.forEach(e => {
    if(e == identificacion.value){
      location.href = 'lista.html'
      return e

    }else{
      alert('pailas')
    }

  });
  
})

boton.addEventListener("click", () => {
  
  let fechaActual = new Date();
  let fechaNacimiento = new Date(fecha.value);
  edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  const mostrar = new Persona(
    apellidos.value,
    cedula.value,
    edad,
    fecha.value,
    nombre.value
  );
  if (
    apellidos.value != "" &&
    cedula.value != "" &&
    edad != "" &&
    fecha.value != "" &&
    nombre.value != ""
  ) {
    resultado.push(mostrar);

  } else {
    validar.innerHTML = `<p class="text-center">INGRESE DATOS EN LOS CAMPOS</p>`;
  }

nombrecompleto.innerHTML = `${mostrar.nombreCompleto()}`
fechacumpleaños.innerHTML = `${mostrar.cumpleaños(fecha.value)}`

localStorage.setItem('lista', JSON.stringify(personas))
personas.push(mostrar)
console.log(personas);



localStorage.setItem('cedulas', `${cedula.value}  `  )

cedulas.push(cedula.value)
console.log(cedulas);

});

