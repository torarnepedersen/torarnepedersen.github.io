const canvas = document.getElementById("ballCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    dx: 4,
    dy: 4
};

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#FF5733";
    ctx.fill();
    ctx.closePath();
}

function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    updateBallPosition();

    requestAnimationFrame(animate);
}

animate();
 
