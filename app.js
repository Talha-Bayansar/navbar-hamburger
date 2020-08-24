// queryselectors
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav");

// constants


// variables


//functions
const slideRight = () => {
    navbar.classList.toggle("visible");
};

//eventlisteners
hamburger.addEventListener("click", slideRight);