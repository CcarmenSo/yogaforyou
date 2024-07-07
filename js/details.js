const urlBase = "https://yoga-api-nzy4.onrender.com/v1/";
const iniciacion = "poses?level=beginner";
const intermedio = "poses?level=intermediate";
const avanzado = "poses?level=expert";
const contenedor = document.querySelector(".mostrarMasinfo");
let endpoint = "";

async function ampliarInfo() {
  const url = new URL(window.location.href);
  const idParam = url.searchParams.get("id");
  const levelParam = url.searchParams.get("level");

  if (levelParam === "beginner") {
    endpoint = iniciacion;
  } else if (levelParam === "intermediate") {
    endpoint = intermedio;
  } else if (levelParam === "expert") {
    endpoint = avanzado;
  }

  const respuesta = await fetch(urlBase + endpoint);
  const datos = await respuesta.json();
  return { datos, idParam };
}

async function ampliarInfoCategorias() {
  const url = new URL(window.location.href);
  const nameParam = url.searchParams.get("name");
  const urlBase2 = ` https://yoga-api-nzy4.onrender.com/v1//poses?name=${nameParam}`;

  const respuesta2 = await fetch(urlBase2);
  const datos2 = await respuesta2.json();
  return { datos2, nameParam };
}

async function mostrarInfo() {
  const { datos, idParam } = await ampliarInfo();
  const { datos2, nameParam } = await ampliarInfoCategorias();
  const asanas = datos.poses;
  const asanas2 = datos2;

  const template3 = document.querySelector("#masInfo").content;
  const copia3 = template3.cloneNode(true);
  const imagen = copia3.querySelector("img");
  const nombre = copia3.querySelector(".nombre");
  const descripcion = copia3.querySelector(".descripcion");
  const beneficios = copia3.querySelector(".beneficios");
  const nombreSanscrito = copia3.querySelector(".nombreSanscrito");
  contenedor.appendChild(copia3);

  if (asanas2.english_name === nameParam) {
    imagen.src = asanas2.url_png;
    nombre.innerText = asanas2.english_name;
    nombreSanscrito.innerText = asanas2.sanskrit_name_adapted;
    descripcion.innerText = asanas2.pose_description;
    beneficios.innerText = asanas2.pose_benefits;
  }

  for (const asana of asanas) {
    if (asana.id === +idParam) {
      imagen.src = asana.url_png;
      nombre.innerText = asana.english_name;
      nombreSanscrito.innerText = asana.sanskrit_name_adapted;
      descripcion.innerText = asana.pose_description;
      beneficios.innerText = asana.pose_benefits;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarInfo();

  document
    .querySelector("button")
    .addEventListener("click", () => window.history.back());
});
console.log("funciona")