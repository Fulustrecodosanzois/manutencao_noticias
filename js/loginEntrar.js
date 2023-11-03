document.addEventListener("DOMContentLoaded", function () {
  var queryParams = new URLSearchParams(window.location.search)
  if (queryParams.get("camposPreenchidos") === "true") {
    var suaContaBtn = document.querySelector("#suaConta")
    suaContaBtn.textContent = ""

    suaContaBtn.style.backgroundImage = 'url("assets/imagens/perfil.jpeg")'
    suaContaBtn.setAttribute("href", "/pages/formulario.html")
    suaContaBtn.style.backgroundSize = "cover"
    suaContaBtn.style.borderRadius = "50%"
    suaContaBtn.style.padding = "30px"
  }
})
