var icon = document.getElementById('icon');
var search = document.getElementById('search');
var button = document.querySelector('.btn');
var navbar = document.querySelector('.navbar');


window.addEventListener("scroll", function(){

    if (document.body.scrollTop >= 500 || document.documentElement.scrollTop > 500) {
        icon.classList.add('visible_icon') ;
        navbar.classList.add('fixed-top') ;
        navbar.style.padding = "10px 30px";
        navbar.style.backgroundColor = "rgba( 0, 0, 0, 0.6)";
    } else {
        icon.classList.remove('visible_icon') ;
        navbar.classList.remove('fixed-top') ;
        navbar.style.padding = "20px 0px";
        navbar.style.backgroundColor = "transparent";

    }
});

button.addEventListener("click" , function(){
    search.classList.toggle('d-none');
})

