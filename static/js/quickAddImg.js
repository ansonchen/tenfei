function loadImage(src,i) {
    

    var image = new Image();    
    image.onload = function(){ 
        console.log(src);
    }
    image.src = src;

    
}

function proimgs(imgs){

        for(var i = 0,j = imgs.length; i<j; i++){   
            var ig = imgs[i];

                 loadImage(ig,i);
       
        }
}

function initLoadImg(){
    
    var loadImages = [
        'static/css/img/index/headbg.jpg',
        'static/css/img/index/new1.jpg',
        'static/css/img/index/new2.jpg',
        'static/css/img/index/new3.jpg',
        'static/css/img/index/headbg2.jpg'
    ];
    
    proimgs(loadImages);
   
    
}

initLoadImg();




