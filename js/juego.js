const urlApi = "https://yoga-api-nzy4.onrender.com/v1/poses"; 
const endPoin = "/poses?id=value";
const numeroCartas = "20";
const emojiYoga = "🧘🏽‍♀️";

function crearArraySinNumerosRepetidos(n) {
  let resultado = [];

  for (let i = 0; i < n; i++) {
    resultado.push(Math.floor(Math.random() * 50));
  }
  resultado = [...new Set(resultado)];

  if (resultado.length >= n) {
    return resultado.slice(0, n);
  } else {
    return crearArraySinNumerosRepetidos(n);
  }
}

function duplicarArray(n) {
  const numeros = crearArraySinNumerosRepetidos(n / 2);
  const numerosDuplicados = numeros.concat(numeros);
  return numerosDuplicados.sort(() => Math.random() - 0.5);
}

function iniciarJuego(numeroCartas) {
  const container = document.querySelector(".container");
  const template = document.querySelector("#card").content;
  const numeros = duplicarArray(numeroCartas);

  for (const numero of numeros) {
    const carta = template.cloneNode(true);
    const p = carta.querySelector("p");
    p.textContent = emojiYoga;
    p.dataset.numeroOculto = numero;
    const div = carta.querySelector("div");
    div.addEventListener("click", girarCartas);

    container.appendChild(carta);
  }
}

function girarCartas() {
  alert("Pagina en construcción");
}

iniciarJuego(numeroCartas);
