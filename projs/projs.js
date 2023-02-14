let images = Array.from(document.getElementsByClassName("image"));
let fsTitle = document.getElementById("fsTitle");
let feTitle = document.getElementById("feTitle");
let beTitle = document.getElementById("beTitle");
let fsBio = document.getElementById("fsBio");
let feBio = document.getElementById("feBio");
let beBio = document.getElementById("beBio");

images.forEach(function(image, index){
    image.addEventListener("mouseover", function(){
        console.log(index);
        if(index>=0 && index<=1){
            fsTitle.innerHTML = image.id;
            fsBio.innerHTML = "enter " + image.id +  " description here";
        }
        else if(index>=2 && index<=5){
            feTitle.innerHTML = image.id;
            feBio.innerHTML = "enter " + image.id +  " description here";
        }
        else{
            beTitle.innerHTML = image.id;
            beBio.innerHTML = "enter " + image.id +  " description here";
        }
    })
})
