const menuEl = document.getElementById("menu");

function myFunction() {
    if(window.scrollY > 10) {
        menuEl.classList.add("sticky");
    } else {
        menuEl.classList.remove("sticky");
    }
}