// ================= VISOR DE IMÁGENES =================
const visor = document.getElementById("visor");
const visorImg = document.getElementById("visor-img");

const imagenes = document.querySelectorAll(".fotos img");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    visorImg.src = img.src;
    visor.style.display = "flex";
  });
});

visor.addEventListener("click", () => {
  visor.style.display = "none";
});

// ================= CONTADOR =================
const fechaInicio = new Date("2022-08-26");
const hoy = new Date();
const diferencia = hoy - fechaInicio;
const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

const spanDias = document.getElementById("dias");
if (spanDias) {
  spanDias.textContent = dias;
}

// ================= ACCESO =================

// Función para normalizar texto
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Respuestas correctas
const respuestaCorrecta1 = "agosto";
const respuestaCorrecta2 = "rosalia";

// Elementos del DOM
const botonEntrar = document.getElementById("btn-entrar");
const input1 = document.getElementById("pregunta1");
const input2 = document.getElementById("pregunta2");
const acceso = document.getElementById("acceso");
const main = document.querySelector("main");

// Evento del botón
if (botonEntrar) {
  botonEntrar.addEventListener("click", () => {
    const respuesta1 = normalizarTexto(input1.value);
    const respuesta2 = normalizarTexto(input2.value);

    if (
      respuesta1 === respuestaCorrecta1 &&
      respuesta2 === respuestaCorrecta2
    ) {
      acceso.style.display = "none";
      main.style.display = "block";
    } else {
      alert("Mbaepikoooo");
    }
  });
}
