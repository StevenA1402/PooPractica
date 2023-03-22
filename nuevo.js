
function info() {
    const lista = JSON.parse(localStorage.getItem("lista"));
    if (!lista) {
      localStorage.setItem(
        "lista",
        JSON.stringify({

        })
      );
    }
    console.log(lista[0].nombre);
    carta.innerHTML += `${lista[0].nombre}`
  
  }
  
  window.addEventListener("load", info);
