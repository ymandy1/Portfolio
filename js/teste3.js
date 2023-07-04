var icon = document.getElementById("moon_icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "..//image/sun.png";
        icon.style.filter = "invert(100%)";
    }else {
        icon.src = "..//image/moon.png";
    }
}

const contactForm = document.getElementById('contact-form');
const messageContainer = document.getElementById('message-container');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: formData
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao enviar o formulário.');
      }
    })
    .then(function (data) {
      messageContainer.innerHTML = '<span class="success">Mensagem enviada com sucesso!</span>';
      contactForm.reset();
    })
    .catch(function (error) {
      console.error(error);
      messageContainer.innerHTML = '<span class="error">Não foi possível enviar sua mensagem. Tente novamente mais tarde.</span>';
    });
});
