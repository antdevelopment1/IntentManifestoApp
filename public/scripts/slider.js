window.onscroll = function() {stickyFunction()};

var section = document.getElementById("nav-container");

var sticky = section.offsetTop;

function stickyFunction() {
    if (window.pageYOffset > sticky) {
        section.classList.add("sticky");
    } else {
        section.classList.remove("sticky");
    }
}