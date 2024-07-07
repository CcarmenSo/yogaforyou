//" https://yoga-api-nzy4.onrender.com/v1/poses?level=beginner";

//---urls y endpoints------
const urlBase = "https://yoga-api-nzy4.onrender.com/v1/";
const iniciacion = "poses?level=beginner";
const intermedio = "poses?level=intermediate";
const avanzado = "poses?level=expert";

//------Botones-----
const bInciacion = document.querySelector("#botonIniciacion");
const bIntermedio = document.querySelector("#botonIntermedio");
const bAvanzado = document.querySelector("#botonAvanzado");

//----Template y Fragment------
const template2 = document.querySelector("#templateNiveles").content;
const fragment2 = document.createDocumentFragment();

//-----Secciones-----
const seccionIniciacion = document.querySelector("#iniciacion");
const seccionIntermedio = document.querySelector("#intermedio");
const seccionAvanzado = document.querySelector("#avanzado");

seccionIniciacion.style.display = "none";
seccionIntermedio.style.display = "none";
seccionAvanzado.style.display = "none";

async function buscarAsanas(endpoint) {
  const respuesta = await fetch(urlBase + endpoint);
  const datos = await respuesta.json();
  return datos.poses;
}

async function mostrarAsanas(seccion, endpoint) {
  const asanas = await buscarAsanas(endpoint);
  seccion.innerText = "";
  const fragment2 = document.createDocumentFragment();
  for (const asana of asanas) {
    const copia2 = template2.cloneNode(true);

    let levelParam = "";
    if (asana.difficulty_level === "Beginner") {
      levelParam = "beginner";
    } else if (asana.difficulty_level === "Intermediate") {
      levelParam = "intermediate";
    } else if (asana.difficulty_level === "Expert") {
      levelParam = "expert";
    }
    copia2.querySelector(
      "a"
    ).href = `details.html?id=${asana.id}&level=${levelParam}`;
    copia2.querySelector("img").src = asana.url_svg;
    fragment2.appendChild(copia2);
  }
  seccion.appendChild(fragment2);

  seccion.style.display = seccion.style.display === "flex" ? "none" : "flex";
}

bInciacion.addEventListener("click", () =>
  mostrarAsanas(seccionIniciacion, iniciacion)
);
bIntermedio.addEventListener("click", () =>
  mostrarAsanas(seccionIntermedio, intermedio)
);
bAvanzado.addEventListener("click", () =>
  mostrarAsanas(seccionAvanzado, avanzado)
);
