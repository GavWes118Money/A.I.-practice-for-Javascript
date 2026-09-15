const images = ["https://i.postimg.cc/nLL9pdxV/Cute-cartoon-cat-hand-drawn-on-transparent-background-PNG.png", "https://i.postimg.cc/ncQMDHt7/578-5786255-cute-dog-clipart-png-download.png", "https://i.postimg.cc/xdbcKnm7/Vicky-common-image-28.webp"];
let currentImage = 0;

setInterval (() => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  document.getElementById ("slideshow").src = image[currentImage];
}, 2000);
