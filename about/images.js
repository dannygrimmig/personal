const carousel = document.getElementsByClassName("images")
let images = Array.from(document.getElementsByClassName("footerImg"))
let mainPhoto = document.getElementById("image")
let bio = document.getElementsByClassName("bio")
console.log(bio[0].innerHTML)


function updateImage(event){
    let image = event.target
    mainPhoto.style.backgroundImage = image.style.backgroundImage

    console.log(image.id)
    if(image.id == "golf"){
        bio[0].innerHTML = "Golf is a favorite of mine, stemming from my older brothers. I played for my highschool team, and have continued playing casually with friends."
    }
    if(image.id == "run"){
        bio[0].innerHTML = "I got into running by training for a marathon during my study abroad in Dublin. Since then I have continued training and hope to run in more destination spots!"
    }
    if(image.id == "guitar"){
        bio[0].innerHTML = "In highschool I got super interested in learning guitar from one of my older brothers. I am a huge fan of The Tallest Man on Earth, and have set out to learn most his songs."
    }
    if(image.id == "film"){
        bio[0].innerHTML = "After finding an old film camera in my attic, I got into film photography. <br><br> Click this one to see some of my favorites!"
    }
    if(image.id == "camp"){
        bio[0].innerHTML = "I really enjoy camping and hiking. Although I don't get to often, I hope to get the chance more in the future!"
    }
    if(image.id == "travel"){
        bio[0].innerHTML = "Studying abroad was an experience I am truly grateful for. I enjoyed my time in Ireland, as well as the many trips I took from here."
    }

}

images.forEach(function(image){
    image.addEventListener("mouseover", updateImage)
});

