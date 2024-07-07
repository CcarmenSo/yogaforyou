const urlApi = "https://yoga-api-nzy4.onrender.com/v1/categories";
const filtro = document.querySelector(".filtroCategoria");
const checkbox = document.querySelectorAll(".input");
const posesYoga = document.querySelector(".posesYoga");

async function buscarPoses() {
  const respuesta = await fetch(urlApi);
  const datos = await respuesta.json();
  return datos;
}

async function mostrarPoses() {
  const datos = await buscarPoses();

  const fragment = document.createDocumentFragment();
  const template = document.querySelector("#templateCategorias").content;

  posesYoga.textContent = "";

  for (let i = 0; i < datos.length; i++) {
    if (checkbox[i].checked) {
      for (const asana of datos[i].poses) {
        const copia = template.cloneNode(true);

        console.log(asana.english_name);

        copia.querySelector(
          "a"
        ).href = `detalles.html?name=${asana.english_name}`;
        copia.querySelector(".imagenPose").src = asana.url_svg;
        copia.querySelector(".imagenPose").alt = asana.english_name;
        copia.querySelector(".nombrePose").innerText = asana.english_name;
        fragment.appendChild(copia);
      }
    }
  }
  posesYoga.appendChild(fragment);
}

checkbox.forEach((checkbox) => {
  checkbox.addEventListener("change", mostrarPoses);
});
