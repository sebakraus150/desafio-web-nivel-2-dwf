function nuevoContacto(el) {
  const contactoEl = document.createElement("div");
  contactoEl.innerHTML = `
    <section class="contacto">
    <h2 class="contacto__title">Escribime</h2>
    <form class="contacto__form">
        <div class="contacto__form-duo-iputs">
            <label class="contacto__form-label" for="input-nombre">
                <p class="contacto__label-text">Nombre</p>
                <input class="contacto__form-input" type="text" placeholder="Tu nombre" id="input-nombre">
            </label>
            <label class="contacto__form-label" for="input-email">
                <p class="contacto__label-text">Email</p>
                <input class="contacto__form-input" type="email" placeholder="tu@mail.com" id="input-email">
            </label>
        </div>
        <label class="contacto__form-label" for="textarea-mensaje">
            <p class="contacto__label-text">Mensaje</p>
            <textarea  class="contacto__form-textarea" name="contacto__mensaje" id="textarea-mensaje"></textarea>
        </label>
        <button class="contacto__boton">
            <p class="contacto__boton-text">Enviar</p>
            <div class="contacto__boton-container">
                <img src="./imgs/butonSend.png" class="contacto__boton-img">
            </div>
        </button>
    </form>
</section>
  `;
  el.appendChild(contactoEl);
}
function addContacto() {
  const contactoEl = document.querySelector(".component-contacto");
  nuevoContacto(contactoEl);
  const botonForm = document.querySelector(".contacto__boton");

  botonForm.addEventListener("click", function (event) {
    event.preventDefault();

    const nombre = document.querySelector("#input-nombre").value;
    const email = document.querySelector("#input-email").value;
    const mensaje = document.querySelector("#textarea-mensaje").value;

    if (nombre.trim() === "" || email.trim() === "" || mensaje.trim() === "") {
      alert("Por favor, completa todos los campos antes de enviar tu mensaje.");
      return;
    }

    const data = {
      to: email,
      message: `${nombre} ha enviado el siguiente mensaje: ${mensaje}`,
    };
    /*
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
          alert("El mensaje ha sido enviado exitosamente.");
        })
        .catch((error) => {
          console.error(error);
          alert("Ha ocurrido un error al enviar el mensaje.");
        });*/
  });
}
