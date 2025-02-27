let currentImageIndex = 0;
const images = [
    'images/image1.JPG',
    'images/image2.JPG',
    'images/image3.JPG'
];

const imageElement = document.getElementById('slider-image');

// Function to change the image
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycles between images
    imageElement.style.opacity = 0; // Fade out

    setTimeout(() => {
        imageElement.src = images[currentImageIndex]; // Change image source
        imageElement.style.opacity = 1; // Fade in
    }, 1000); // Wait for 1 second before changing the image
}

// Event listener for click to change the image
document.body.addEventListener('click', changeImage);

