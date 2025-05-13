// Array of video file paths
const videos = ['videos/video01.mp4', 'videos/video02.mp4', 'videos/video03.mp4'];

// Store playback time for each video
const playbackPositions = [0, 0, 0];

// Keep track of which video is currently playing
let currentVideoIndex = 0;

// Get DOM elements
const video = document.getElementById('video-player');
const textBox = document.getElementById('text-box');

// Load and play the first video
video.src = videos[currentVideoIndex];
video.muted = true; // Start muted due to browser autoplay rules
video.play();

let hasUnmuted = false; // Track if audio has been unmuted on first click

// Handle text box click
textBox.addEventListener('click', () => {
  // On first click, unmute the video
  if (!hasUnmuted) {
    video.muted = false;
    hasUnmuted = true;
  }

  // Save current video's playback position
  playbackPositions[currentVideoIndex] = video.currentTime;

  // Randomly choose a different video
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * videos.length);
  } while (nextIndex === currentVideoIndex); // Ensure it's different from the current

  // Set the new current index
  currentVideoIndex = nextIndex;

  // Load new video
  video.src = videos[currentVideoIndex];

  // Restore saved position if available
  video.onloadedmetadata = () => {
    video.currentTime = playbackPositions[currentVideoIndex] || 0;
    video.play();
  };
});
// JavaScript Document