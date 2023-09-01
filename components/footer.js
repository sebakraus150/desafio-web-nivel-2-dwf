function nuevoFooter(el) {
  const footerEl = document.createElement("div");
  footerEl.innerHTML = `
    <footer class="footer">
    <a href="./index.html" class="footer__logo">
        <img src="./imgs/logosk.png" class="footer__logo_content" alt="logosk">
    </a>
    <div class="footer__sections">
        <a class="footer__sections_list" href="./index.html">
            <div class="footer__sections_icon">
                <img src="./imgs/home.png" class="footer__sections_icon_content" alt="home icon">
            </div>
            <p>Home</p>
        </a>
        <a class="footer__sections_list" href="./servicios.html">
            <div class="footer__sections_icon">
                <img src="./imgs/user.png" class="footer__sections_icon_content" alt="user icon">
            </div>
            <p>Servicios</p>
        </a>
        <a class="footer__sections_list" href="./contacto.html">
            <div class="footer__sections_icon">
                <img src="./imgs/phone.png" class="footer__sections_icon_content" alt="phone icon">
            </div>
            <p>Contacto</p>
        </a>
    </div>
    <div class="footer__networks">
        <a href="https://www.linkedin.com/in/sebasti%C3%A1n-kraus/" class="social_network" target="_blank">
            <img src="./imgs/linkedin.png" alt="linkedin logo" class="network_logo">
        </a>
        <a href="https://github.com/sebakraus150" class="social_network" target="_blank">
            <img src="./imgs/github.png" alt="github logo" class="network_logo">
        </a>
        <a href="https://twitter.com/?lang=es" class="social_network" target="_blank">
            <img src="./imgs/twitter.png" alt="twitter logo" class="network_logo">
        </a>
    </div>
    <p class="footer__derechos">©2022 - https://apx.school</p>
</footer>
    `;
  el.appendChild(footerEl);
}
function addFooter() {
  const footerEl = document.querySelector(".component-footer");
  nuevoFooter(footerEl);
}
