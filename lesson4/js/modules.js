function toggleMenu() {
    document
        .getElementsByClassName("navigator")[0].classList.toggle("responsive");
}

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

$(function() {
    $("#page-header").load("..js/header");
    $("#page-nav").load("..js/nav");
    $("page-footer").load("..js/footer");
});