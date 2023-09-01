function nuevaCard(el) {
  const CardsEl = document.createElement("div");
  CardsEl.innerHTML = `
    <div class="services__title">
    <h2 class="services__title-blanco">Mis</h2>
    <h2 class="services__title-celeste">servicios</h2>
  </div>
  <div class="services__cards"></div>
  <template id="templateCards">
        <div class="services__cards-item">
            <div class="cards-item-img">
                <img src="./imgs/serviceOne.jpg" class="item-img-service" alt="imagen servicio">
            </div>
            <h3 class="sercives__cards-title">Desarrollo de paginas web</h3>
            <p class="services__cars-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, debitis voluptas neque maiores deserunt, ipsam natus id sit, facere harum dolor quasi vero iure autem corporis ratione repudiandae perferendis ad!</p>
        </div>
  </template>
  <div class="ver-mas">
    <a href="https://github.com/sebakraus150" target="_blank" class="ver-mas__link">
        <div class="ver-mas__container">
            <img src="./imgs/arrow-down-svgrepo-com 1.png" class="ver-mas__icon" alt="icono ver mas" class="ver-mas-icon">
        </div>
        <p class="ver-mas__text">ver más</p>
    </a>
  </div>
      `;
  el.appendChild(CardsEl);
}
function addComponentCard(displayTitle, displayVerMas) {
  const servicesAndWorks = document.querySelector(".services");
  nuevaCard(servicesAndWorks);
  document.querySelector(".services__title").style.display = displayTitle;
  document.querySelector(".ver-mas").style.display = displayVerMas;
  if (displayTitle == "none") {
    document.querySelector(".services__cards").style.paddingTop = "100px";
  }
}
function addCard(params = {}) {
  const template = document.querySelector("#templateCards");
  const container = document.querySelector(".services__cards");
  template.content.querySelector(".item-img-service").src = params.imgService;
  template.content.querySelector(".sercives__cards-title").textContent =
    params.TitleContent;
  template.content.querySelector(".services__cars-description").textContent =
    params.descriptionContent;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getCards(url, displayTitle, displayVerMas) {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      addComponentCard(displayTitle, displayVerMas);
      const imgs = data.includes.Asset.map((f) => {
        return f.fields.file.url;
      });
      const text = data.items.map((f) => {
        return f.fields;
      });
      if (imgs.length === 1) {
        for (let index = 1; index < text.length; index++) {
          imgs.push(imgs[0]);
        }
      }
      const collection = text.map((t, index) => ({
        imgService: imgs[index],
        TitleContent: t.tituloServicio,
        descriptionContent: t.descripcionServicio,
      }));
      return collection;
    });
}
