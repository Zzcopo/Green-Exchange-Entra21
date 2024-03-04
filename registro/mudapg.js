function redirecionarParaPaginaInicial() {
    // Adicione o código que você deseja executar quando o login for realizado com sucesso
    // Pode ser exibição de uma mensagem ou qualquer outra lógica específica
  
    // Redireciona para a página inicial (substitua 'nome_da_pasta' pelo nome real da pasta onde está o index.html)
    window.location.href = 'Green_exchange/pag_inicial/index.html';
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Adicione um ouvinte de evento para o formulário de registro
    const formularioRegistro = document.querySelector('form');
    formularioRegistro.addEventListener('submit', function (event) {
      // Lógica de registro aqui
  
      // Substitua este if pela lógica real de verificação de login
      // Neste exemplo, assume-se que o login foi bem-sucedido
      const loginBemSucedido = true;
  
      if (loginBemSucedido) {
        // Se o login for bem-sucedido, chame a função de redirecionamento
        event.preventDefault(); // Evita que o formulário seja enviado normalmente
        redirecionarParaPaginaInicial();
      }
    });
  });
  