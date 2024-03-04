function validacaoSenha() {
  var senha = document.getElementById("senha-cadastro").value;

  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  var numberRegex = /\d/; 
  var tamanhoSenha = senha.length;

  if (!uppercaseRegex.test(senha) || !lowercaseRegex.test(senha) || !specialCharRegex.test(senha) || !numberRegex.test(senha) || tamanhoSenha < 8) {
    document.getElementById("senha-error-msg").style.display = "block";
    return false;
  } else {
    document.getElementById("senha-error-msg").style.display = "none";
    return true;
  }
}



document.getElementById('verSenhaBtn').addEventListener('click', function () {
  var senhaInput = document.getElementById('senha-cadastro');
  if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
  } else {
      senhaInput.type = 'password';
  }
});

