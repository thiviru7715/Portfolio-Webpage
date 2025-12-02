
document.addEventListener('DOMContentLoaded', function () {
    const text1 = "UI/UX Designer &";
    const text2 = "Front‑End Developer";
    const speed = 70; // Typing speed in ms
    const element = document.getElementById("typewriter-text");

    let i = 0;
    let j = 0;

    function typeWriter() {
        if (i < text1.length) {
            element.innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else if (i === text1.length) {
            element.innerHTML += "<br>";
            i++; // Increment to move to next phase
            setTimeout(typeWriter, speed);
        } else if (j < text2.length) {
            element.innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        } else {
            // Animation finished, maybe add a blinking cursor class or remove it
            element.style.borderRight = "none";
        }
    }

    // Start typing
    typeWriter();
});
