// Function to create a floating heart
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");

    // Randomly choose a side (left, right, top, bottom)
    const side = Math.floor(Math.random() * 4); // 0 = left, 1 = right, 2 = top, 3 = bottom

    // Random position along the opposite axis
    let randomPosition = Math.random() * 100;

    if (side === 0) { // Left Side
        heart.style.left = "-50px";
        heart.style.top = `${randomPosition}vh`;
        heart.style.animation = "moveFromLeft 8s linear infinite";
    } else if (side === 1) { // Right Side
        heart.style.right = "-50px";
        heart.style.top = `${randomPosition}vh`;
        heart.style.animation = "moveFromRight 8s linear infinite";
    } else if (side === 2) { // Top Side
        heart.style.top = "-50px";
        heart.style.left = `${randomPosition}vw`;
        heart.style.animation = "moveFromTop 8s linear infinite";
    } else { // Bottom Side
        heart.style.bottom = "-50px";
        heart.style.left = `${randomPosition}vw`;
        heart.style.animation = "moveFromBottom 8s linear infinite";
    }

    document.body.appendChild(heart);

    // Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 8000);
}
// Function to create twinkling stars
function createStar() {
    const star = document.createElement("div");
    // Randomly assign blue or red stars
    if (Math.random() < 0.5) {
        star.classList.add("twinkling-star", "blue");  // 50% chance for blue stars
    } else {
        star.classList.add("twinkling-star", "red");   // 50% chance for red stars
    }

    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 1.5+ 1}s`;

    document.body.appendChild(star);
    setTimeout(() => star.remove(), 3500);
}

// Generate floating hearts and twinkling stars
setInterval(createHeart, 150);
setInterval(createStar, 150);
// Generate hearts every second
setInterval(createHeart, 5000);

function goToPage(answer) {
    if (answer === 'yes') {
        window.location.href = 'yes.html';  // Redirect to the "Yes" page
    } else if (answer === 'no') {
        window.location.href = 'no.html';  // Redirect to the "No" page
    }
}

