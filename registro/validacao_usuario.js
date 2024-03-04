function validarNomeUsuario() {
    var username = document.getElementById("username").value;

    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    var numberRegex = /\d/;

    if (!uppercaseRegex.test(username) || !lowercaseRegex.test(username) ||
        !specialCharRegex.test(username) || !numberRegex.test(username)) {
        document.getElementById("username").classList.add("is-invalid");
        return false;
    } else {
        document.getElementById("username").classList.remove("is-invalid");
        return true;
    }
}

function realizarLogin() {
    var senhaValida = validacaoSenha();
    var nomeUsuarioValido = validarNomeUsuario();

    if (senhaValida && nomeUsuarioValido) {
        alert("Registrado com sucesso");
    } else {
        alert("Por favor, corrija os erros no formulário.");
    }

    getElementById("button-type").type = button;
}



