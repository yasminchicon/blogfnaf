const form = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem");
const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popup-msg");
const popupClose = document.getElementById("popup-close");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value.trim();

  mensagem.textContent = "";
  mensagem.style.color = "red";

  if (!nome || !email || !idade) {
    mensagem.textContent = "Preencha os campos obrigatórios: Nome, E-mail e Idade.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Insira um e-mail válido.";
    return;
  }

  if (isNaN(idade) || Number(idade) <= 0) {
    mensagem.textContent = "A idade deve ser um número válido.";
    return;
  }

  popupMsg.textContent = "Cadastro realizado com sucesso!";
  popup.style.display = "flex";

  form.reset();
});

popupClose.addEventListener("click", function () {
  popup.style.display = "none";
});
