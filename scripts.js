

let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
//Links
navLinks.classList.toggle("open");
links.forEach(link => {
    link.classList.toggle("fade");
});

//Animation
hamburger.classList.toggle("toggle");
});

navLinks.addEventListener('click', ()=>{
//Links
navLinks.classList.toggle("open");
links.forEach(link => {
    link.classList.toggle("fade");
});

//Animation
hamburger.classList.toggle("toggle");
});
