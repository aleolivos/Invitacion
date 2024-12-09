// Fecha objetivo: 3 de mayo de 2025 a las 12:00 PM
const targetDate = new Date("May 3, 2025 12:00:00").getTime();

// Función para actualizar la cuenta atrás
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Muestra la cuenta atrás en el elemento con la clase .cuentaAtras
    document.querySelector(".cuentaAtras").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Si el tiempo se ha agotado, muestra un mensaje
    if (timeRemaining < 0) {
        document.querySelector(".cuentaAtras").innerHTML = "¡Es el gran día!";
    }
}

// Actualiza la cuenta atrás cada 1 segundo
setInterval(updateCountdown, 1000);
