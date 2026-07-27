// Script de búsqueda simulada de vuelos - Agencia Viajes STAR

const formulario = document.getElementById("formulario-vuelos");
const contenedorResultado = document.getElementById("resultado-busqueda");

// Muestra un mensaje en la página (éxito o error)
function mostrarMensaje(texto, tipo) {
  contenedorResultado.textContent = texto;
  contenedorResultado.className = "resultado " + tipo;
}

// Valida los campos del formulario y muestra el resultado simulado
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const origen = document.getElementById("origen").value.trim();
  const destino = document.getElementById("destino").value.trim();
  const fecha = document.getElementById("fecha").value.trim();
  const pasajeros = document.getElementById("pasajeros").value.trim();

  // Validar que ningún campo esté vacío
  if (origen === "" || destino === "" || fecha === "" || pasajeros === "") {
    mostrarMensaje(
      "Advertencia: complete todos los campos (origen, destino, fecha y pasajeros).",
      "error"
    );
    return;
  }

  // Validar que el número de pasajeros sea mayor que cero
  const cantidadPasajeros = Number(pasajeros);
  if (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0) {
    mostrarMensaje(
      "Advertencia: el número de pasajeros debe ser mayor que cero.",
      "error"
    );
    return;
  }

  // Resultado simulado de la búsqueda
  const mensaje =
    "Búsqueda realizada: vuelos desde " +
    origen +
    " hacia " +
    destino +
    " para " +
    cantidadPasajeros +
    " pasajero(s) el " +
    fecha +
    ".";

  mostrarMensaje(mensaje, "exito");
});
