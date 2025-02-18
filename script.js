const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 15);
const binaryRain = Array(columns).fill(0);

const graphPoints = Array.from({ length: 10 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
}));

function drawBackground() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
    ctx.font = "15px monospace";

    for (let i = 0; i < binaryRain.length; i++) {
        let char = Math.random() > 0.5 ? "0" : "1";
        ctx.fillText(char, i * 15, binaryRain[i]);

        if (binaryRain[i] > canvas.height && Math.random() > 0.975) {
            binaryRain[i] = 0;
        } else {
            binaryRain[i] += 15;
        }
    }

    ctx.strokeStyle = "rgba(255, 215, 0, 0.7)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let i = 0; i < graphPoints.length; i++) {
        graphPoints[i].x += graphPoints[i].speedX;
        graphPoints[i].y += graphPoints[i].speedY;

        if (graphPoints[i].x < 0 || graphPoints[i].x > canvas.width) {
            graphPoints[i].speedX *= -1;
        }
        if (graphPoints[i].y < 0 || graphPoints[i].y > canvas.height) {
            graphPoints[i].speedY *= -1;
        }

        ctx.lineTo(graphPoints[i].x, graphPoints[i].y);
    }
    ctx.stroke();
}

function animate() {
    drawBackground();
    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
