
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    const nome = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();

    if (!nome || !email || !msg) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos.");
    }
  });
