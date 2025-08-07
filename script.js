
const countdownEl = document.getElementById("countdown");
const eventDate = new Date("2025-08-15T00:00:00-03:00");

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "¡El evento ya comenzó!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);


document.querySelectorAll('.pregunta').forEach(p => {
  p.addEventListener('click', () => {
    const isOpen = p.classList.contains('active');
    document.querySelectorAll('.pregunta').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.respuesta').style.display = 'none';
    });

    if (!isOpen) {
      p.classList.add('active');
      p.querySelector('.respuesta').style.display = 'block';
    }
  });
});

