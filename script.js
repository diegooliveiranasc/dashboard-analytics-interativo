fetch("data.json")
  .then(res => res.json())
  .then(data => {

    document.getElementById("usuarios").innerText = data.usuarios;
    document.getElementById("receita").innerText = "R$ " + data.receita;
    document.getElementById("conversao").innerText = data.conversao + "%";

    const ctx = document.getElementById("grafico");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.meses,
        datasets: [{
          label: "Receita",
          data: data.valores,
        }]
      }
    });

  });
