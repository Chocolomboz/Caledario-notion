// Generar calendario dinámicamente
document.addEventListener("DOMContentLoaded", () => {
  const calendari = document.getElementById("calendari");

  const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  diasSemana.forEach(dia => {
    const header = document.createElement("div");
    header.textContent = dia;
    header.classList.add("header");
    calendari.appendChild(header);
  });

  const fecha = new Date();
  const mes = fecha.getMonth();
  const year = fecha.getFullYear();

  const primerDia = new Date(year, mes, 1).getDay(); 
  const ultimoDia = new Date(year, mes + 1, 0).getDate();

  // Ajustar el inicio (en JS el domingo es 0, así que lo adaptamos)
  let offset = primerDia === 0 ? 6 : primerDia - 1;

  // Espacios en blanco
  for (let i = 0; i < offset; i++) {
    const empty = document.createElement("div");
    calendari.appendChild(empty);
  }

  // Días del mes
  for (let i = 1; i <= ultimoDia; i++) {
    const day = document.createElement("div");
    day.textContent = i;
    day.classList.add("day");

    if (i === fecha.getDate()) {
      day.style.background = "#ff4444";
      day.style.color = "#fff";
      day.style.fontWeight = "bold";
    }

    calendari.appendChild(day);
  }
});