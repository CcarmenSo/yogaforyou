const botonCategoria = document.getElementById("categoria");
const botonNiveles = document.getElementById("nivel");
const botonYoga = document.getElementById("botonYoga");

botonCategoria.addEventListener("click", () => {
  window.location.href = "html/categorias.html";
});
botonNiveles.addEventListener("click", () => {
  window.location.href = "html/niveles.html";
});
botonYoga.addEventListener("click", () => {
  window.location.href = "html/conceptosbasicos.html";
});
