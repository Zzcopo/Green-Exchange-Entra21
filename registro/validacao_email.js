function validateForm() {
    let email = document.getElementById("email").value;
    let emailProvider = document.getElementById("emailProvider").value;
  
    if (!isValidEmail(email + emailProvider)) {
      toastr.error('Por favor, insira um e-mail válido.', 'Erro de validação', {
        positionClass: 'toast-bottom-center', 
        closeButton: true, 
      });
      return false;
    }
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  