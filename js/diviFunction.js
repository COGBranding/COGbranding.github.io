const testFunction = "diviFunction is working";
console.log(testFunction);

// Current Year HTML
function currentYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// Phone Icon in Menu
let div = document.createElement("li");
div.classList.add("menu-item", "phone-icon");
let phoneIcon = '<a href="#"></a>';
div.innerHTML = phoneIcon;

function menuPhone() {
    document.getElementById("et_mobile_nav_menu").before(div);
}
