window.addEventListener("load", function() {
    scrollAdjust();
    // toggleList();
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

function toggleList(item) {
    var list1 = document.getElementById("text2");
    var items1 = list1.getElementsByTagName("a");

    var list2 = document.getElementById("text3");
    var items2 = list2.getElementsByTagName("a");

    if(item.classList.contains("t2")) {
        for (var i = 0; i < items1.length; i++) {
            (list1.querySelector('.active')) ? list1.querySelector('.active').classList.remove('active') : '';
            item.classList.add('active');
            var activeIndex = 0;
            for (var i = 0; i < items1.length; i++) {
                if(items1[i].classList.contains("active")) activeIndex = i;
            }
            setImg("hero2", activeIndex);
        }
    }
    
    if(item.classList.contains("t3")) {
        for (var i = 0; i < items2.length; i++) {
            (list2.querySelector('.active')) ? list2.querySelector('.active').classList.remove('active') : '';
            item.classList.add('active');
            var activeIndex = 0;
            for (var i = 0; i < items2.length; i++) {
                if(items2[i].classList.contains("active")) activeIndex = i;
            }
            setImg("hero3", activeIndex);
        }
    }
}

function setImg(divName, activeIndex) {
    var div = document.getElementById(divName);

    div.style.backgroundImage = 'url(images/' + divName + '/' + activeIndex + '.png)';
}