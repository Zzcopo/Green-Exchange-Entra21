document.addEventListener('DOMContentLoaded', function () {
  const cepInput = document.getElementById('zip');
  const addressInput = document.getElementById('address');
  const registerButton = document.getElementById('button-type');


  function fillAddressByCep(cep) {
    const viaCepApiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(viaCepApiUrl)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          addressInput.value = data.logradouro;
          cepInput.value = formatCEP(cep);
        } else {
          console.error('CEP não encontrado');
        }
      })
      .catch(error => console.error('Erro ao obter informações do CEP:', error));
  }

  function formatCEP(cep) {
    return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  }
  cepInput.addEventListener('input', function () {
    const cep = cepInput.value.replace(/\D/g, ''); 
    if (cep.length === 8) {
      fillAddressByCep(cep);
    }
  });
  console.log('Realizando o registro...');
  });

