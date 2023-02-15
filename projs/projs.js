let images = Array.from(document.getElementsByClassName("image"));
let fsTitle = document.getElementById("fsTitle");
let feTitle = document.getElementById("feTitle");
let beTitle = document.getElementById("beTitle");
let fsBio = document.getElementById("fsBio");
let feBio = document.getElementById("feBio");
let beBio = document.getElementById("beBio");

let toolsContainer = document.getElementsByClassName("tools");
let html = document.createElement("span"); html.innerHTML = "HTML";
let css = document.createElement("span"); css.innerHTML = "CSS";
let js = document.createElement("span"); js.innerHTML = "JS";

images.forEach(function(image, index){
    image.addEventListener("mouseover", function(){
        console.log(index);
        if(index>=0 && index<=1){
            fsTitle.innerHTML = image.id;
            fsBio.innerHTML = image.name;
        }
        else if(index>=2 && index<=5){
            feTitle.innerHTML = image.id;
            feBio.innerHTML = image.name;

            if(index < 4){
                toolsContainer[1].appendChild(html);
                toolsContainer[1].appendChild(css);
                toolsContainer[1].appendChild(js);
            }
            else{
                toolsContainer[1].innerHTML = "";
                toolsContainer[1].appendChild(html);
                toolsContainer[1].appendChild(css);
            }
           
        }
        else{
            beTitle.innerHTML = image.id;
            beBio.innerHTML = image.name;
        }
    })
})
