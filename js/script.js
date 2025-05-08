let intervalo;

function iniciarContagem() {
  clearInterval(intervalo);
  const input = document.getElementById('dataInicio');
  const inicio = new Date(input.value);

  if (!input.value || isNaN(inicio.getTime())) {
    document.getElementById('resultado').textContent = "Por favor, insira uma data válida.";
    return;
  }

  function atualizar() {
    const agora = new Date();
    const diff = agora - inicio;

    if (diff < 0) {
      document.getElementById('resultado').textContent = "A data está no futuro.";
      return;
    }

    const totalSegundos = Math.floor(diff / 1000);
    const dias = Math.floor(totalSegundos / (60 * 60 * 24));
    const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    document.getElementById('resultado').textContent =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
  }

  atualizar();
  intervalo = setInterval(atualizar, 1000);
}

document.getElementById("carolSecret").addEventListener("click", () => {
  const box = document.getElementById("easterEgg");
  box.style.display = "block";

  const inicio = new Date("2025-04-24T20:45:00");

  function atualizarSecreto() {
    const agora = new Date();
    const diff = agora - inicio;

    if (diff < 0) return;

    const totalSegundos = Math.floor(diff / 1000);
    const dias = Math.floor(totalSegundos / (60 * 60 * 24));
    const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    document.getElementById('contadorSecreto').textContent =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos desde 24/04/2025 às 20:45.`;
  }

  atualizarSecreto();
  setInterval(atualizarSecreto, 1000);
});
