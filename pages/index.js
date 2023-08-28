(function () {
  addHeader();
  addBienvenida(
    "https://cdn.contentful.com/spaces/5igcjpffz3pf/environments/master/entries?access_token=72MBjAQJ5IdLmWZuNp0B_FdQYkDIJ8O7GPUJguH5EeA&content_type=desafioWebAndComponents"
  );
  getCards().then((cards) => {
    for (const c of cards) {
      addCard(c);
    }
    document.querySelector(".ver-mas").style.display = "inherit";
  });
  addContacto();
  addFooter();
})();