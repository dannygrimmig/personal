const carousel = document.getElementsByClassName("images")
let images = Array.from(document.getElementsByClassName("footerImg"))
let mainPhoto = document.getElementById("image")


function updateImage(event){
    let image = event.target
    mainPhoto.style.backgroundImage = image.style.backgroundImage
}

images.forEach(function(image){
    image.addEventListener("mouseover", updateImage)
});

