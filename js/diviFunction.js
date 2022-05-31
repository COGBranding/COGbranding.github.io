const testFunction = "diviFunction is working";
console.log(testFunction);

// Current Year HTML
function currentYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// Phone Icon in Menu

function menuPhone(phone_num) {
    let div = document.createElement("div");
    div.classList.add("menu-item", "phone-icon");
    let phoneIcon = '<a href="tel:' + phone_num + '"></a>';
    div.innerHTML = phoneIcon;
    document.getElementById("et_mobile_nav_menu").prepend(div);
}
