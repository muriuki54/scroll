  
function getElement(element){
    return document.querySelector(element);
}

function getElements(elements){
    return document.querySelectorAll(elements);
}
const bgDotsWrapper = getElement('.bg_dots__wrapper');
const bgDots = getElements('.bg__dot');

window.addEventListener('resize', getWindowWidth);

function getWindowWidth(){
    return bgDotsWrapper.clientWidth;
}

function createDots(){
    for(let i = 0; i < 8; i++){
        const newDot = document.createElement('div');
        newDot.classList.add('bg__dot');
        let size = (Math.random() * 250);
        newDot.style.width = size+"px";
        newDot.style.height = size+"px";
        newDot.style.top = ""+Math.random() * 200+"px";
        newDot.style.left = ""+Math.random() * getWindowWidth()+"px";

        bgDotsWrapper.appendChild(newDot);
    }
};

createDots();

bgDotsWrapper.addEventListener('mousemove', function(e){
    const dots = document.querySelectorAll('.bg__dot');
    Object.keys(dots).forEach(function(key) {

        const positionTop = dots[key].offsetTop;
        const positionBottom = dots[key].offsetTop + (dots[key].clientHeight);
        const positionLeft = dots[key].offsetLeft;
        const positionRight = dots[key].offsetLeft + (dots[key].clientHeight);
        
        // console.log(positionTop, positionBottom, positionLeft, positionRight);
        // console.log(e.pageX);

        let dotY = parseInt(window.getComputedStyle(dots[key]).top.split('px')[0]);
        let dotX = parseInt(window.getComputedStyle(dots[key]).left.split('px')[0]);

            if ((e.pageY + 10)>= (positionTop -  dots[key].clientWidth/2) && (e.pageY + 10) <= (positionLeft +  dots[key].clientHeight/2)){
                dots[key].style.top = dotX+2+"px";
            } 
            if ((e.pageX + 10)>= (positionLeft -  dots[key].clientWidth/2) && (e.pageX + 10) <= (positionLeft +  dots[key].clientWidth/2)){
                dots[key].style.left = dotX+2+"px";
            }
        
            if ((e.pageY + 10) >= (positionTop -  dots[key].clientWidth) && (e.pageX + 10) <= (positionTop +  dots[key].clientHeight)){
                dots[key].style.left = dotX-2+"px";
            }
            if ((e.pageX + 10)>= (positionLeft -  dots[key].clientWidth) && (e.pageX + 10) <= (positionLeft +  dots[key].clientWidth)){
                dots[key].style.left = dotX-2+"px";
            }
    })
})

let progressCount = getElement('#progress_count'),
    scrollIdentifier = getElements('.scroll_identifier');

window.addEventListener('scroll', function(){
    let scrolled = document.all ? iebody.scrollTop : pageYOffset;
    let height = window.innerHeight;
    console.log(scrolled, height);
    progressCount.style.height = ""+(scrolled / height * 100)+"%";

    // Object.keys(scrollIdentifier).keys(function(key) {
    //     if(scrollIdentifier[key].offsetTop >= scrolled) {
    //         scrollIdentifier[key].style.background = 'red';
    //     } else {
    //         scrollIdentifier[key].style.background = '#f3f3f3';
    //     }
    // })
    
})