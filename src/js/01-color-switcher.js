function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

let intervalId = null;
stopButton.setAttribute('disabled', false);

startButton.addEventListener('click', () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.setAttribute('disabled', false);
  stopButton.removeAttribute('disabled', true);
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);

  startButton.disabled = false;
  stopButton.setAttribute('disabled', true);
});
