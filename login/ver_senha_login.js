function toggleSenhaVisibility() {
    var senhaInput = document.getElementById("senha-cadastro");

    if (senhaInput.type === "password") {
      senhaInput.type = "text";
    } else {
      senhaInput.type = "password";
    }
  }