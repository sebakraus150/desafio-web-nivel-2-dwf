function nuevaBienvenida(el) {
  const bienvenidaEl = document.createElement("div");
  bienvenidaEl.innerHTML = `
    <template id="templateBienvenida">
    <section class="bienvenida">
        <div class="bienvenida__titulo">
            <span class="bienvenida__titulo-blanco">
               <p class="bienvenida__titulo-blanco-content"></p>
            </span>
            <span class="bienvenida__titulo-celeste">
                <p class="bienvenida__titulo-celeste-one"></p>
                <p class="bienvenida__titulo-celeste-two"></p>
            </span>
        </div>
        <div class="bienvenida__img">
            <img class="bienvenida__img-content" src="" alt="imagen">
            <div class="bienvenida__img-shadow"></div>
        </div>
    </section>
    <section class="presentacion">
        <div class="presentacion__text">
            <h2 class= "presentacion__text-name"></h2>
            <p class="presentacion__text-description"></p>
        </div>
        <div class="presentacion__div">
            <img src="" class="presentacion__div-img" alt="imagen de presentación">
        </div>
    </section>
</template>
      `;
  el.appendChild(bienvenidaEl);
}
function configBienvenida(params = {}) {
  const template = document.querySelector("#templateBienvenida");
  const container = document.querySelector(".component-bienvenida");

  template.content.querySelector(".bienvenida__titulo-blanco").textContent =
    params.tituloBlanco;
  template.content.querySelector(
    ".bienvenida__titulo-celeste-one"
  ).textContent = params.tituloCelesteOne;
  template.content.querySelector(
    ".bienvenida__titulo-celeste-two"
  ).textContent = params.tituloCelesteTwo;
  template.content.querySelector(".bienvenida__img-content").src =
    params.imgBienvenida;
  template.content.querySelector(".presentacion__text-name").textContent =
    params.titlePresentacion;
  template.content.querySelector(
    ".presentacion__text-description"
  ).textContent = params.descriptionPresentacion;
  template.content.querySelector(".presentacion__div-img").src =
    params.imgPresentacion;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}
function getData(urlData, paramText, paramImg) {
  return fetch(urlData)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const dataText = data.items[paramText].fields;
      const dataImgs = data.includes.Asset;
      const tituloCeleste = dataText.bienvenidaTituloCeleste.split(" ");
      return {
        tituloBlanco: dataText.bienvenidaTituloBlanco,
        tituloCelesteOne: tituloCeleste[0],
        tituloCelesteTwo: tituloCeleste[1],
        imgBienvenida: dataImgs[paramImg].fields.file.url,
        titlePresentacion: dataText.presentacionTextName,
        descriptionPresentacion: dataText.presentacionTextDescription,
        imgPresentacion: dataImgs[2].fields.file.url,
      };
    });
}

function addBienvenida(urlData, display, paramText, paramImg) {
  const bienvenidaEl = document.querySelector(".component-bienvenida");
  nuevaBienvenida(bienvenidaEl);
  getData(urlData, paramText, paramImg).then((params) => {
    configBienvenida(params);
    if (paramImg == 0) {
      document
        .querySelector(".bienvenida__img-content")
        .classList.add("bienvenida__img-content-maletin");
      document.querySelector(".bienvenida__img-shadow").style.width = "100%";
    }
    document.querySelector(".presentacion").style.display = display;
  });
}
