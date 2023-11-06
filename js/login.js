document.addEventListener("DOMContentLoaded", function () {
  const entrarBtn = document.querySelector("#entrar");

  entrarBtn.addEventListener("click", function (event) {
    let emailInput = document.querySelector("#InputEmail");
    let passwordInput = document.querySelector("#InputPassword");

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      event.preventDefault();
      alert("Por favor, preencha todos os campos.");
    } else {
      window.location.href = "/index.html?camposPreenchidos=true";
    }
  });

  let emailInput = document.querySelector("#InputEmail");

  emailInput.addEventListener("keyup", () => {
    let minusculo = emailInput.value.toLowerCase();
    if (minusculo.indexOf("@") === -1 || minusculo.indexOf(".com") === -1) {
      emailInput.classList.add("border-danger");
      emailInput.classList.remove("border-success");
    } else {
      emailInput.classList.add("border-success");
      emailInput.classList.remove("border-danger");
    }
  });
});
