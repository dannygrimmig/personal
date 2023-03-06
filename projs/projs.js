let images = Array.from(document.getElementsByClassName("image"));
let fsTitle = document.getElementById("fsTitle");
let feTitle = document.getElementById("feTitle");
let beTitle = document.getElementById("beTitle");
let fsBio = document.getElementById("fsBio");
let feBio = document.getElementById("feBio");
let beBio = document.getElementById("beBio");

let toolsContainer = document.getElementsByClassName("tools");
let html = document.createElement("span"); let htmlIMG = document.createElement("img"); htmlIMG.height="75"; htmlIMG.width="75"; htmlIMG.src = "./media/html.png"; html.appendChild(htmlIMG);
let css = document.createElement("span"); let cssIMG = document.createElement("img"); cssIMG.height="75"; cssIMG.width="75"; cssIMG.src = "./media/css3.png"; css.appendChild(cssIMG);
let js = document.createElement("span"); let jsIMG = document.createElement("img"); jsIMG.height="75"; jsIMG.width="75"; jsIMG.src = "./media/java-script.png"; js.appendChild(jsIMG);

images.forEach(function(image, index){
    image.addEventListener("mouseover", function(){
        console.log(index);
        if(index>=0 && index<=1){
            fsTitle.innerHTML = image.id;
            fsBio.innerHTML = image.name;
            image.addEventListener("mouseout",function(){
                fsTitle.innerHTML = "Full Stack";
                fsBio.innerHTML = "Here are a few of my favorite full stack projects displaying end to end development.";
                toolsContainer[1].innerHTML = "";
            })
        }
        else if(index>=2 && index<=5){
            feTitle.innerHTML = image.id;
            feBio.innerHTML = image.name;
            image.addEventListener("mouseout",function(){
                feTitle.innerHTML = "Front End";
                feBio.innerHTML = "Here are some of my recent front end developement projects.";
                toolsContainer[1].innerHTML = "";
            })

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
            image.addEventListener("mouseout",function(){
                beTitle.innerHTML = "Back End";
                beBio.innerHTML = "Here are a few back end projects.";
                toolsContainer[1].innerHTML = "";
            })
        }
    })
})
