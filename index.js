let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
  if (!timerId) { // если таймер уже не запущен
    timerId = setInterval(updateClock, 1000); // запускаем updateClock() каждую секунду
  }
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
  clearInterval(timerId); // останавливаем таймер
  timerId = null; // сбрасываем timerId
});

function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
