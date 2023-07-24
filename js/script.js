var imageIndex = 1;
var imageArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

function changeImage() {
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
    document.getElementById("carousel-image").src = imageArray[imageIndex];
    imageIndex++;
}

setInterval(changeImage, 5000);
