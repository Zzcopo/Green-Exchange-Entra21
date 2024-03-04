document.addEventListener("DOMContentLoaded", function () {
    const estados = [
      "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
      "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", 
      "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
      "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina",
      "São Paulo", "Sergipe", "Tocantins"
    ];

    const selectEstado = document.getElementById("state");

    estados.forEach(function (estado) {
      const option = document.createElement("option");
      option.text = estado;
      selectEstado.add(option);
    });
  });

