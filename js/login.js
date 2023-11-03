document.addEventListener("DOMContentLoaded", function () {
  var entrarBtn = document.querySelector("#entrar")

  entrarBtn.addEventListener("click", function (event) {
    var emailInput = document.querySelector("#InputEmail")
    var passwordInput = document.querySelector("#InputPassword")

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
      event.preventDefault()
      alert("Por favor, preencha todos os campos.")
    } else {
      window.location.href = "/index.html?camposPreenchidos=true"
    }
  })
})
