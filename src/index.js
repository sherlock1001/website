function startCounter() {
  const counterElement = document.getElementById('counter');
  const targetNumber = 100; // Change this to the desired final number
  const duration = 3000; // Animation duration in milliseconds
  const frameRate = 30; // Number of frames per second

  const increment = targetNumber / (duration / 1000 * frameRate);
  let currentNumber = 0;

  const intervalId = setInterval(() => {
    currentNumber += increment;
    counterElement.textContent = Math.round(currentNumber);

    // Generate a random color
    const randomColor = getRandomColor();
    counterElement.style.color = randomColor;

    if (currentNumber >= targetNumber) {
      clearInterval(intervalId);
      counterElement.textContent = targetNumber; // Ensure the final number is exact
    }
  }, 1000 / frameRate);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
