
  const form = document.querySelector("form");

  form.addEventListener("submit", function(e) {
    const nome = form.elements["nome"].value.trim();
    const email = form.elements["email"].value.trim();
    const mensagem = form.elements["mensagem"].value.trim();

    if(!nome || !email || !mensagem){
      e.preventDefault();//Impede o envio
      alert("Por favor,preencha todos os campos obrigatórios.");
    }
  });
   