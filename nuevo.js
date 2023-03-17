
function info() {
    const lista = JSON.parse(localStorage.getItem("lista"));
    if (!lista) {
      localStorage.setItem(
        "lista",
        JSON.stringify({

        })
      );
    }
  
    const carta = document.getElementById('carta');
  
    carta.innerHTML = `<div class="p-[10rem]" >Nombre: ${lista.nombre}\n<br>
    Apellido: ${lista.apellidos}<br>
    Cedula: ${lista.cedula}`;
  }
  
  window.addEventListener("load", info);
