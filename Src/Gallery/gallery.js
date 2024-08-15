
var thumbnail = document.querySelectorAll(".thumbnail-img")
var main_image = document.querySelector(".main-img")
    
for(var i = 0; i<=thumbnail.length ; i++)
    {
        thumbnail[i].addEventListener('click', function(){
            thumbnail[i] = main_image
            main_image.src =this.src
        })
    }