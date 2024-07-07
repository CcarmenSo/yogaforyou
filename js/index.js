const botonCategoria = document.getElementById("categoria");
const botonNiveles = document.getElementById("nivel");
const botonYoga = document.getElementById("botonYoga");

botonCategoria.addEventListener("click", () => {
  window.location.href = "html/category.html";
});
botonNiveles.addEventListener("click", () => {
  window.location.href = "html/levels.html";
});
botonYoga.addEventListener("click", () => {
  window.location.href = "html/basics.html";
});
