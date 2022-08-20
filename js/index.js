window.addEventListener('load',function(){
    setTimeout(function() {
        loader.style.display ="none";
    }, 3000); //wait 1sec
})

//scroll to top 
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        BackToTop.style.display = "block";
    } else {
        BackToTop.style.display = "none";
    }
}