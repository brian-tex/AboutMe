var imageIndex = 1;
var imageArray = ["images/IMG_6501.png", "images/IMG_6502.png", "images/IMG_6503.png"];

function changeImage() {
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
    document.getElementById("carousel-image").src = imageArray[imageIndex];
    imageIndex++;
}

setInterval(changeImage, 5000);
