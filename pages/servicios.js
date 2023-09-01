(function () {
  addHeader();
  addBienvenida(
    "https://cdn.contentful.com/spaces/5igcjpffz3pf/environments/master/entries?access_token=72MBjAQJ5IdLmWZuNp0B_FdQYkDIJ8O7GPUJguH5EeA&content_type=desafioWebAndComponents",
    "none",
    0,
    0
  );
  getCards(
    "https://cdn.contentful.com/spaces/5igcjpffz3pf/environments/master/entries?access_token=72MBjAQJ5IdLmWZuNp0B_FdQYkDIJ8O7GPUJguH5EeA&content_type=desafioWacCardWork",
    "none",
    "inherit"
  ).then((cards) => {
    addFooter();
    for (const c of cards) {
      addCard(c);
    }
  });
})();
