window.onscroll = function() {stickyFunction()};

var header = document.getElementById("nav-container");

var sticky = header.offsetHeight;

function stickyFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}