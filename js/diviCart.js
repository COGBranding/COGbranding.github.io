const testCart = "diviCart is working";
console.log(testCart);

// Prepend Account/ Cart Icon
let div = document.createElement("li");
div.classList.add("menu-item", "account-icon");
let accountIcon = '<a href="/my-account"></a>';
div.innerHTML = accountIcon;

function menuCart(site_width) {
    // For tablets and smaller devices, add the account and cart icons
    if (window.innerWidth <= site_width) {
        document.getElementById("et_mobile_nav_menu").prepend(document.getElementsByClassName("menu-cart-info").parentNode.html()) + document.getElementsByClassName("menu-cart-info").before(div);
    } else {
        // Add the account icon to the end of the desktop menu
        let lastMenuItem = document.getElementById("top-menu").lastChild;
        lastMenuItem.classList.add("myAccount");
        lastMenuItem.after(div);
    }
}
