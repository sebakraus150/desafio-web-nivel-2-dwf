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
function getCards() {
  return fetch(
    "https://cdn.contentful.com/spaces/5igcjpffz3pf/environments/master/entries?access_token=72MBjAQJ5IdLmWZuNp0B_FdQYkDIJ8O7GPUJguH5EeA&content_type=desafioWacCardService"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const imgs = data.includes.Asset.map((f) => {
        return f.fields.file.url;
      });
      const text = data.items.map((f) => {
        return f.fields;
      });
      const collection = text.map((t, index) => ({
        imgService: imgs[index],
        TitleContent: t.tituloServicio,
        descriptionContent: t.descripcionServicio,
      }));
      return collection;
    });
}
