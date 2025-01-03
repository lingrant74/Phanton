const lefthandle = document.querySelector('.left-handle')
const mediaClass = document.querySelector('.media-class')
const righthandle = document.querySelector('.right-handle')

let x = 0
lefthandle.addEventListener("click",() =>{
    if (x>=0){
        if (x === 0) {
            mediaClass.insertAdjacentHTML('afterbegin',`<div class = "media-element">
                <img src = "images/4.jpg">
            </div>
            <div class = "media-element">
                <img src = "images/5.jpg">
            </div>
            <div class = "media-element">
                <img src = "images/6.jpg">
            </div>
            <div class = "media-element">
                <img src = "images/7.jpg">
            </div>`)
        }
    }
    else{
    x = x +100}
    mediaClass.style.transform = `translateX(${x}%)`;
    mediaClass.style.transition = 'transform 2s'
    

    
})

righthandle.addEventListener("click",() =>{
 
    x = x -100
    mediaClass.style.transform = `translateX(${x}%)`;
    mediaClass.style.transition = 'transform 2s'
    

    
})
