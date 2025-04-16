// Friday 2:00 AM Calgary time (UTC-6)
const targetDate = new Date("2025-04-18T02:00:00-06:00").getTime();
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdown.innerHTML = "✅ بدأ التصويت الآن!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
}

setInterval(updateCountdown, 1000);
