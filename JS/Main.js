var Imgs = Array.from(document.querySelectorAll('.item img'))
var LightBoxContiner = document.querySelector('.lightBoxContainer')
var LightBox = document.querySelector('.lightBox')

var next = document.getElementById('next');
var prev = document.getElementById('prev');
var closeBtn = document.getElementById('closeBtn');
var CurrnetIndex = 0;

for (var i = 0; i < Imgs.length; i++) {
    Imgs[i].addEventListener('click',function (e) {
       LightBoxContiner.classList.remove('d-none')
       var Img = e.target.getAttribute('src');
        LightBox.style.backgroundImage=`url(${Img})`

       CurrnetIndex = Imgs.indexOf(e.target)

        
    })
    
}
function Next() {
    if(CurrnetIndex == Imgs.length -1){
        CurrnetIndex = 0;
    }
    CurrnetIndex++;
    var Img =  Imgs[CurrnetIndex].getAttribute('src');
    LightBox.style.backgroundImage= `url(${Img})`;
    
    
}
function Prev() {
    if(CurrnetIndex <= 0){
        CurrnetIndex = Imgs.length-1;
    }
    CurrnetIndex--;
    var Img =  Imgs[CurrnetIndex].getAttribute('src');
    LightBox.style.backgroundImage= `url(${Img})`;
    
    
}
function CloseBtn(){
LightBoxContiner.classList.add('d-none')
}


document.addEventListener('keydown', function(e){   
    if (e.code == 'ArrowRight') {
        Next()
    }else if (e.code == 'ArrowLeft'){
        Prev()
    }
    else if(e.code == 'Escape'){
        CloseBtn()
    }
})
next.addEventListener('click' , Next);
prev.addEventListener('click' , Prev)
closeBtn.addEventListener('click' , CloseBtn)

