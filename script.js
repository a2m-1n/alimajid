//---------- Navbar ----------//
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Portfolio Gallery

let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")){
        // deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // activates new filter item
        event.target.classList.add("active");
        let filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }

});

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

window.addEventListener("scroll" , () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")){
        style.removeAttribute("disabled");
    }
    else{
        style.setAttribute("disabled","true");
    }
})
}
