function nuevoHeader(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `
  <div class="header">
  <a href="./index.html" class="logosk">
      <img src="./imgs/logosk.png" alt="logo personal" class="logosk">
  </a>
  <div class="ventana">
      <button class="ventana__abrir-ventana">
          <img src="./imgs/icon-menu.png" class="ventana__boton-abrir-menu" alt="icono menu">
      </button>
      <button class="ventana__cerrar-ventana">
          <img src="./imgs/icon-close.png" class="ventana__boton-cerrar-menu" alt="icono menu">
          <ul class="ventana__direcciones">
              <li class="ventana__li"><a href="./portfolio.html" class="ventana__a">Portfolio</a></li>
              <li class="ventana__li"><a href="./servicios.html" class="ventana__a">Servicios</a></li>
              <li class="ventana__li"><a href="./contacto.html" class="ventana__a">Contacto</a></li>
          </ul>
      </button>
  </div>
</div>
  `;
  el.appendChild(headerEl);
}
function main() {
  const abrirVentanaEl = document.querySelector(".ventana__cerrar-ventana");
  const cerrarVentanaEl = document.querySelector(".ventana__abrir-ventana");

  document.addEventListener("DOMContentLoaded", function () {
    cerrarVentanaEl.addEventListener("click", function () {
      abrirVentanaEl.style.display = "inherit";
    });
    abrirVentanaEl.addEventListener("click", function () {
      abrirVentanaEl.style.display = "";
    });
  });
}
function addHeader() {
  const headerEl = document.querySelector(".component-header");
  nuevoHeader(headerEl);
}
document.addEventListener("DOMContentLoaded", function () {
  main();
});
