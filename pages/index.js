(function () {
  addHeader(); //añade el header - header.js
  addBienvenida(
    "https://cdn.contentful.com/spaces/5igcjpffz3pf/environments/master/entries?access_token=72MBjAQJ5IdLmWZuNp0B_FdQYkDIJ8O7GPUJguH5EeA&content_type=desafioWebAndComponents",
    "",
    2,
    1
  ); //añade la sección de bienvenida y si es necesario la de presentación - bienvenida.js
  getCards(
    "https://cdn.contentful.com/spaces/5igcjpffz3pf/environments/master/entries?access_token=72MBjAQJ5IdLmWZuNp0B_FdQYkDIJ8O7GPUJguH5EeA&content_type=desafioWacCardService"
  ).then((cards) => {
    addContacto(); //añade la sección de contacto y uso el then para asegurar que la sección bienvenida cargue primero - contactoSection.js
    addFooter(); //añade el footer y uso el then para asegurar que la sección bienvenida cargue primero - footer.js
    for (const c of cards) {
      addCard(c);
    }
    document.querySelector(".ver-mas").style.display = "none";
  }); //añade las cartas de servicios o trabajos - card.js
})();
