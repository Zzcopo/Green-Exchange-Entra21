function validatePassword() {
    var senha = document.getElementById("senha-cadastro").value;
  
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    var numberRegex = /\d/;
    var tamanhoSenha = senha.length;
  
    var senhaErrorBalao = document.getElementById("senha-error-balao");
    var senhaErrorMsg = document.getElementById("senha-error-msg");
  
    if (!uppercaseRegex.test(senha)) {
      senhaErrorMsg.innerText = "A senha deve conter pelo menos uma letra maiúscula.";
      showErrorMessage(senhaErrorBalao);
      return false;
    }
  
    if (!lowercaseRegex.test(senha)) {
      senhaErrorMsg.innerText = "A senha deve conter pelo menos uma letra minúscula.";
      showErrorMessage(senhaErrorBalao);
      return false;
    }
  
    if (!specialCharRegex.test(senha)) {
      senhaErrorMsg.innerText = "A senha deve conter pelo menos um caractere especial.";
      showErrorMessage(senhaErrorBalao);
      return false;
    }
  
    if (!numberRegex.test(senha)) {
      senhaErrorMsg.innerText = "A senha deve conter pelo menos um número.";
      showErrorMessage(senhaErrorBalao);
      return false;
    }
  
    if (tamanhoSenha < 8) {
      senhaErrorMsg.innerText = "A senha deve ter pelo menos 8 caracteres.";
      showErrorMessage(senhaErrorBalao);
      return false;
    }
  
    hideErrorMessage(senhaErrorBalao);
    return true;
    
  }
  
  function realizarLogin() {
    var senhaValida = validatePassword();
    if (senhaValida) {
     alert("logado com sucesso")
      var x = document.getElementById("button-type").type = "button";
    }
    
  }
  
  
  
  function showErrorMessage(element) {
    element.style.display = "block";
  }
  
  function hideErrorMessage(element) {
    element.style.display = "none";
  }



  