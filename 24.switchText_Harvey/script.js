const textArray = [
    "Batman posing for the fans.",
    "As a kid Batman was my favorite superhero.",
    "When I was a young kid I used to play with my younger cousins and one of them would always say I'm not Eli I'm Batman.",
    "There's a Batman inside all of us.",
    "Batman is cool."
];

let currentTextIndex = 0;

document.getElementById('image').addEventListener('click', function() {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;  // Cycle through the array
    document.getElementById('text-box').textContent = textArray[currentTextIndex];
});
const textArray = [
    "Batman posing for the fans.",
    "As a kid Batman was my favorite superhero.",
    "When I was a young kid I used to play with my younger cousins and one of them would always say I'm not Eli I'm Batman.",
    "There's a Batman inside all of us.",
    "Batman is cool."
];

let currentTextIndex = 0;

document.getElementById('image').addEventListener('click', function() {
    currentTextIndex = (currentTextIndex + 1) % textArray.length;  // Cycle through the array
    document.getElementById('text-box').textContent = textArray[currentTextIndex];
});
var sentences = [
    "Batman posing for the fans.",
    "As a kid Batman was my favriote superhero.",
    "When I was a young kid I used to play with my younger cousins and one of them would always say I'm not Eli I'm Batman.",
    "There's a Batman inside all of us.",
    "Batman is cool."
];
var index = 0;

document.getElementById("image").addEventListener("click", function() {
    index = (index + 1) % sentences.length;
    document.getElementById("text-box").textContent = sentences[index];
});
