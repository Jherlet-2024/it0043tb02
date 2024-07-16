const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-links");
const navItem = document.querySelectorAll(".nav-links li");



hamburgerMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
});


navItem.forEach((link) => link.addEventListener("click", closeMenu));

function closeMenu() {
    navMenu.classList.remove("active");
    hamburgerMenu.classList.remove("active");
    document.body.classList.remove("stop-scroll");
}


function Reset(){
    var inputField1 = document.getElementById('name');
    var inputField2 = document.getElementById('subject');
    var inputField3 = document.getElementById('email');
    var inputField4 = document.getElementById('message');
    
    inputField1.value = '';
    inputField2.value = '';
    inputField3.value = '';
    inputField4.value = '';
}
