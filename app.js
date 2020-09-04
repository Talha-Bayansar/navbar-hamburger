// queryselectors
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");
const hamburgerLines = document.querySelectorAll(".hamburger div");

// constants


// variables


//functions
const slideRight = () => {
    navbar.classList.toggle("visible");
    // hamburgerLines.forEach(line => line.classList.toggle("animation-hamburger"));
    hamburger.classList.toggle("animation-hamburger");
};

//eventlisteners
hamburger.addEventListener("click", slideRight);