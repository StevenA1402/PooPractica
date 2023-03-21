
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
    let cedulita = localStorage.getItem('cedulas')
    let nuevolistado = lista.find(e => e.cedula == cedulita)
    console.log(nuevolistado);
  
  }
  
  window.addEventListener("load", info);
