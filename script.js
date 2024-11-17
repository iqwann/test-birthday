function openLetter() {
    const envelope = document.querySelector(".envelope");
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");

    envelope.style.transform = "rotateX(0deg)";
    setTimeout(() => {
        flap.style.transform = "rotateX(-180deg)";
    }, 600);
    setTimeout(() => {
        letter.style.display = "block";
    }, 1000);
}

function closeLetter() {
    const envelope = document.querySelector(".envelope");
    const flap = document.getElementById("flap");
    const letter = document.getElementById("letter");

    letter.style.display = "none";
    setTimeout(() => {
        flap.style.transform = "rotateX(0deg)";
    }, 200);
    setTimeout(() => {
        envelope.style.transform = "rotateX(90deg)";
    }, 800);
}
