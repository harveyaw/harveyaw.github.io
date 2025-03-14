document.addEventListener("DOMContentLoaded", function() {
    var textBoxes = document.querySelectorAll(".text-box");
    var backgroundContainer = document.getElementById("background-image-container");

    // Function to update the background image when a text box is in view
    function updateBackgroundImage(imagePath) {
        backgroundContainer.style.backgroundImage = "url('" + imagePath + "')";
    }

    // Intersection Observer to detect when a text box enters or leaves the viewport
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // When a text box enters the viewport, update the background image
                var imagePath = entry.target.getAttribute("data-image");
                updateBackgroundImage(imagePath);
                entry.target.classList.add("in-view"); // Make text box visible
            } else {
                entry.target.classList.remove("in-view"); // Hide text box when it leaves the viewport
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the text box is visible
    });

    // Observe each text box
    textBoxes.forEach(function(textBox) {
        observer.observe(textBox);
    });
});
