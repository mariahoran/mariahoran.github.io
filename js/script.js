window.addEventListener("load", function() {
    scrollAdjust();
    toggleList();
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
}

function toggleList() {
    var list1 = document.getElementById("text2");
    var items1 = list1.getElementsByTagName("a");

    var list2 = document.getElementById("text3");
    var items2 = list2.getElementsByTagName("a");

    
    for (var i = 0; i < items1.length; i++) {
        items1[i].addEventListener("click", function() {
            (list1.querySelector('.active')) ? list1.querySelector('.active').classList.remove('active') : '';
            this.classList.add('active');
            setImg("div2");
        });
    } 
    
    for (var i = 0; i < items2.length; i++) {
        items2[i].addEventListener("click", function() {
            (list2.querySelector('.active')) ? list2.querySelector('.active').classList.remove('active') : '';
            this.classList.add('active');
            setImg("div3");
        });
    } 
}

function setImg(divName) {
    var div = document.getElementById(divName);
    var items = div.getElementsByTagName("a");

    activeIndex = 0;
    for (var i = 0; i < items.length; i++) {
        if(items[i].classList.contains("active")) activeIndex = i;
    }
    div.style.backgroundImage = 'url(images/' + divName + '/' + activeIndex + '.png)';
}