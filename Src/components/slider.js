let slidercontainer =  document.querySelector('#containerSlider')
    let slider = document.querySelector('#slider')
    let imgs = slider.getElementsByTagName('section')
    let elements = 3;
    let sliderwidth = slidercontainer.clientWidth;
    let imgWidth = sliderwidth/elements;

    slider.style.width = imgs.length*imgWidth+'px';

    for(let i =0; i< imgs ; i++){
      const elements = imgs[i];
      elements.style.width = imgWidth+'px'
    }

    function prev(){
      if(+slider.style.marginLeft.slice(0,-2)!= -imgWidth*(imgs.length-elements)){
        slider.style.marginLeft = (+slider.style.marginLeft.slice(0,-2))-imgWidth +'px'
      }
      
    }
    function next(){
      if(+slider.style.marginLeft.slice(0,-2)!=0){
        slider.style.marginLeft = (+slider.style.marginLeft.slice(0,-2)+imgWidth) +'px'
      }
      
    }