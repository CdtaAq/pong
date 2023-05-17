var paddleLeft = document.getElementById('paddle-left');
var paddleRight = document.getElementById('paddle-right');
var ball = document.getElementById('ball');

var paddleLeftY = 80;
var paddleRightY = 80;
var ballX = 195;
var ballY = 90;
var ballDX = -1;
var ballDY = -1;

document.addEventListener('keydown', function(event) {
  // Player 1 controls
  if (event.keyCode === 87 && paddleLeftY >= 10) {
    paddleLeftY -= 10;
    paddleLeft.style.top = paddleLeftY + 'px';
  }
  if (event.keyCode === 83 && paddleLeftY <= 150) {
    paddleLeftY += 10;
    paddleLeft.style.top = paddleLeftY + 'px';
  }

  // Player 2 controls
  if (event.keyCode === 38 && paddleRightY >= 10) {
    paddleRightY -= 10;
    paddleRight.style.top = paddleRightY + 'px';
  }
  if (event.keyCode === 40 && paddleRightY <= 150) {
    paddleRightY += 10;
    paddleRight.style.top = paddleRightY + 'px';
  }
});

function update() {
  // Update ball position
  ballX += ballDX;
  ballY += ballDY;
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  // Check ball collision with paddles
  if (ballX <= 20 && ballY >= paddleLeftY && ballY <= paddleLeftY + 40) {
    ballDX = 1;
  }
  if (ballX >= 370 && ballY >= paddleRightY && ballY <= paddleRightY + 40) {
    ballDX = -1;
  }

  // Check ball collision with walls
  if (ballY <= 0 || ballY >= 190) {
    ballDY = -ballDY;
  }

  // Check ball out of bounds
  if (ballX <= 0) {
    ballX = 195;
    ballY = 90
