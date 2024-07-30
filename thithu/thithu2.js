var slideshowImages = document.querySelectorAll('.slideshow img');
var currentImage = 0;
var numImages = slideshowImages.length;

function nextImage() {
  slideshowImages[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % numImages;
  slideshowImages[currentImage].classList.add('active');
}

function previousImage() {
  slideshowImages[currentImage].classList.remove('active');
  currentImage = (currentImage + numImages - 1) % numImages;
  slideshowImages[currentImage].classList.add('active');
}

var nextButton = document.querySelector('.next-button');
var previousButton = document.querySelector('.previous-button');

nextButton.addEventListener('click', nextImage);
previousButton.addEventListener('click', previousImage);

// chuyển đổi ảnh sau 5 giây
setInterval(nextImage, 5000);
