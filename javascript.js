// Get the HTML elements
const images = document.querySelectorAll('#images img');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// Set the current image index
let currentIndex = 0;

// Show the current image
function showImage() {
  images[currentIndex].style.display = 'block';
}

// Hide the current image
function hideImage() {
  images[currentIndex].style.display = 'none';
}

// Show the previous image
function showPrevImage() {
  hideImage();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage();
}

// Show the next image
function showNextImage() {
  hideImage();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage();
}

// Add event listeners to the buttons
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Show the first image
showImage();