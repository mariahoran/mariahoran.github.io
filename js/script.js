window.addEventListener("load", function() {
    scrollAdjust();
})

window.addEventListener("scroll", function() {
    scrollAdjust();
})

function scrollAdjust() {
    var fromTop = window.pageYOffset;
    var height = window.innerHeight;
    if(fromTop > height*0.15) {
        textBox1.className = "hide disappear";
    } else textBox1.className = "show";
    if(fromTop > height*0.3) {
        text2.className = "show";
    } else text2.className = "hide";
    if(fromTop > height*0.3+500) {
        text3.className = "show";
    } else text3.className = "hide";
    if(fromTop > height*0.3+1600) {
        block4.className = "show";
    } else block4.className = "hide";
}
