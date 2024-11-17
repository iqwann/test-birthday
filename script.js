function revealMessage() {
    const message = document.getElementById("message");
    message.style.display = "block";
    releaseBalloons();
}

function releaseBalloons() {
    const balloonContainer = document.getElementById("balloons");
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloonContainer.appendChild(balloon);
    }
}

// Add balloons animation
document.addEventListener("DOMContentLoaded", () => {
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes floatUp {
            0% { transform: translateY(100%); }
            100% { transform: translateY(-200%); }
        }

        .balloon {
            position: absolute;
            bottom: 0;
            width: 30px;
            height: 50px;
            background: radial-gradient(circle, #ff4081 40%, transparent);
            border-radius: 50% 50% 50% 50%;
            animation: floatUp 5s linear infinite;
        }
    `;
    document.head.appendChild(style);
});