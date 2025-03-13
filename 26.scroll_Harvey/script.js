document.addEventListener("DOMContentLoaded", function () {
    const textBoxes = document.querySelectorAll(".text-box");
    const background = document.getElementById("background");

    // Set an initial background image to avoid blank screen
    if (textBoxes.length > 0) {
        background.style.backgroundImage = `url(${textBoxes[0].getAttribute("data-image")})`;
    }

    // IntersectionObserver to detect when text boxes appear
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Instantly change background image when text box enters viewport
                    const newImage = entry.target.getAttribute("data-image");
                    background.style.backgroundImage = `url(${newImage})`;
                }
            });
        },
        { threshold: 0.6 } // Trigger when 60% of the text box is in view
    );

    // Observe each text box
    textBoxes.forEach((textBox) => observer.observe(textBox));
});
